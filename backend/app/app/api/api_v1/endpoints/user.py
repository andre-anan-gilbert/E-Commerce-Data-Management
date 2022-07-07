"""User endpoint."""
from typing import Any, Optional

from fastapi import APIRouter, Cookie, Depends, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from jose import jwt

from app import crud, schemas, models
from app.api import dependencies
from app.core import security
from app.core.config import settings

router = APIRouter()


@router.post('/sign-up', response_model=schemas.Token)
def sign_up(
        *,
        response: Response,
        database: Session = Depends(dependencies.get_database_session),
        user_in: schemas.UserCreate,
) -> Any:
    """Creates a new user."""
    user = crud.user.get_by_email(database, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail='The user with this username already exists in the system.',
        )
    user = crud.user.create(database, obj_in=user_in)

    access_token, refresh_token = security.generate_tokens(user)
    response.set_cookie(key='jid', value=refresh_token, httponly=True)
    return {'access_token': access_token}


@router.post('/sign-in', response_model=schemas.Token)
def sign_in(
        response: Response,
        database: Session = Depends(dependencies.get_database_session),
        form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    """OAuth2 sign-in token."""
    user = crud.user.authenticate(database, email=form_data.username, password=form_data.password)
    if user is None: raise HTTPException(status_code=400, detail='Incorrect email or password')

    access_token, refresh_token = security.generate_tokens(user)
    response.set_cookie(key='jid', value=refresh_token, httponly=True)
    return {'access_token': access_token}


@router.post('/refresh-token', response_model=schemas.Token)
def create_refresh_token(
        response: Response,
        database: Session = Depends(dependencies.get_database_session),
        jid: Optional[str] = Cookie(None),
) -> Any:
    """OAuth2 refresh token."""
    token = jid
    if token is None: raise HTTPException(status_code=401, detail='Token missing')

    try:
        payload = jwt.decode(token, settings.REFRESH_TOKEN_SECRET, algorithms=settings.ALGORITHM)
    except jwt.JWTError as error:
        raise HTTPException(status_code=401, detail='User is not signed in') from error

    user = crud.user.get(database, obj_id=payload['sub'])

    if user is None:
        raise HTTPException(status_code=401, detail='User is not signed in')

    if user.token_version != int(payload['ver']):
        raise HTTPException(status_code=401, detail='Invalid token')

    updated_user = {'token_version': user.token_version + 1}
    user = crud.user.update(database, database_obj=user, obj_in=updated_user)

    access_token, refresh_token = security.generate_tokens(user)
    response.set_cookie(key='jid', value=refresh_token, httponly=True)
    return {'access_token': access_token}


@router.get('/me', response_model=schemas.User)
def get_current_user(
        database: Session = Depends(dependencies.get_database_session),  # pylint: disable=unused-argument
        current_user: models.User = Depends(dependencies.get_current_user),
) -> Any:
    """Gets the current user."""
    return current_user
