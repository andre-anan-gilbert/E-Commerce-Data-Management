"""Sign in endpoint."""
from fastapi import APIRouter
from app.schemas import jwt_token

router = APIRouter()


@router.post("/sign-in/token", response_model=jwt_token.Token)
async def sign_in_token():
    """**OAuth2 sign-in token.**"""
    pass


@router.post("/refresh-token")
async def refresh_token():
    """**OAuth2 refresh token.**"""
    pass
