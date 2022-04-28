"""JSON web token properties."""
from pydantic import BaseModel


class Token(BaseModel):
    access_token: str
    token_type: str
