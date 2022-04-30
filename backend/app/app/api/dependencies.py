"""API dependencies."""
from typing import Generator
from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import jwt
from pydantic import ValidationError
from sqlalchemy.orm import Session
from app.database.session import SessionLocal
from app.authentication import security
from app.core.config import settings
from app import crud, models, schemas

oauth2 = OAuth2PasswordBearer(tokenUrl=f'{settings.API_V1_STR}/sign-in/token')


def get_database_session() -> Generator:
    """Yields a database session."""
    try:
        database = SessionLocal()
        yield database
    finally:
        database.close()


def get_current_user(database: Session = Depends(get_database_session), token: str = Depends(oauth2)) -> models.User:
    try:
        payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[security.ALGORITHM])
        token_data = schemas.TokenPayload(**payload)
    except (jwt.JWTError, ValidationError) as error:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Could not validate credentials') from error

    user = crud.user.get(database, id=token_data.sub)
    if not user: raise HTTPException(status_code=404, detail='User not found')
    return user
