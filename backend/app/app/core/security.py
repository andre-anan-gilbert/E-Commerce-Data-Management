"""Authetication password methods."""
from datetime import datetime, timedelta
from typing import Any, Union
from jose import jwt
from passlib.context import CryptContext
from app.core.config import settings
from app.models.user import User

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def create_access_token(subject: Union[str, Any], expires_delta: timedelta) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {
        'exp': expire,
        'sub': str(subject),
    }
    encoded_jwt = jwt.encode(to_encode, settings.ACCESS_TOKEN_SECRET, algorithm=settings.ALGORITHM)
    return encoded_jwt


def create_refresh_token(subject: Union[str, Any], expires_delta: timedelta, token_version: int) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {
        'exp': expire,
        'sub': str(subject),
        'ver': str(token_version),
    }
    encoded_jwt = jwt.encode(to_encode, settings.REFRESH_TOKEN_SECRET, algorithm=settings.ALGORITHM)
    return encoded_jwt


def generate_tokens(user: User) -> tuple[str, str]:
    access_token_expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(user.id, access_token_expires)

    refresh_token_expires = timedelta(minutes=settings.REFRESH_TOKEN_EXPIRE_MINUTES)
    refresh_token = create_refresh_token(user.id, refresh_token_expires, user.token_version)
    return access_token, refresh_token
