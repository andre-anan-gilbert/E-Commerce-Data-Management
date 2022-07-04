"""API version 1."""
from fastapi import APIRouter
from app.api.api_v1.endpoints import products, user

router = APIRouter()
router.include_router(user.router, prefix='/user', tags=['User'])
router.include_router(products.router, prefix='/products', tags=['Products'])
