"""Sign in endpoint."""
from typing import Any, Optional
from datetime import timedelta

from fastapi import APIRouter, Cookie, Depends, HTTPException, Response
from fastapi.security import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from jose import jwt

from app import crud, authentication
from app.api import dependencies
from app.schemas import jwt_token
from app.core.config import settings

import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

router = APIRouter()


@router.post('/sign-in/token', response_model=jwt_token.Token)
async def get_sign_in_token(
        response: Response,
        database: Session = Depends(dependencies.get_database_session),
        form_data: OAuth2PasswordRequestForm = Depends(),
) -> Any:
    """OAuth2 sign-in token."""
    user = crud.user.authenticate(database, email=form_data.username, password=form_data.password)
    if not user: raise HTTPException(status_code=400, detail='Incorrect email or password')

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = authentication.create_access_token(user.user_id, expires_delta=access_token_expires)

    refresh_token_expires = timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES)
    refresh_token = authentication.create_refresh_token(user.user_id, expires_delta=refresh_token_expires)

    response.set_cookie(key='jid', value=refresh_token, httponly=True)
    return {'access_token': access_token, 'token_type': 'bearer'}


@router.post('/refresh-token')
async def get_refresh_token(
        response: Response,
        database: Session = Depends(dependencies.get_database_session),
        jid: Optional[str] = Cookie(None),
):
    """OAuth2 refresh token."""
    token = jid
    logger.warning('Refresh token: %s', token)
    if not token: return {'access_token': ''}

    try:
        payload = jwt.decode(token, settings.REFRESH_TOKEN_SECRET, algorithms=settings.ALGORITHM)
    except jwt.JWTError as error:
        raise HTTPException(status_code=401, detail='Login first') from error

    logger.warning('Payload %s', payload)

    user = crud.user.get(database, obj_id=payload['sub'])
    if not user: return {'access_token': ''}

    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = authentication.create_access_token(user.user_id, expires_delta=access_token_expires)

    refresh_token_expires = timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES)
    refresh_token = authentication.create_refresh_token(user.user_id, expires_delta=refresh_token_expires)

    response.set_cookie(key='jid', value=refresh_token, httponly=True)
    return {'access_token': access_token, 'token_type': 'bearer'}
