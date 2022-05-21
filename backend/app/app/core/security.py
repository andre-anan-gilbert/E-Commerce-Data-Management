"""Authetication password methods."""
from datetime import datetime, timedelta
from typing import Any, Union
from jose import jwt
from passlib.context import CryptContext
from app.core.config import settings

pwd_context = CryptContext(schemes=['bcrypt'], deprecated='auto')


def verify_password(plain_password: str, hashed_password: str) -> bool:
    return pwd_context.verify(plain_password, hashed_password)


def get_password_hash(password: str) -> str:
    return pwd_context.hash(password)


def create_token(subject: Union[str, Any], expires_delta: timedelta, refresh: bool = False) -> str:
    expire = datetime.utcnow() + expires_delta
    to_encode = {
        'exp': expire,
        'sub': str(subject),
    }
    secret = settings.REFRESH_TOKEN_SECRET if refresh else settings.ACCESS_TOKEN_SECRET
    encoded_jwt = jwt.encode(to_encode, secret, algorithm=settings.ALGORITHM)
    return encoded_jwt
