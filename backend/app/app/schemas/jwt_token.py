"""JSON web token properties."""
from typing import Optional
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str


class TokenPayload(BaseModel):
    sub: Optional[int] = None
