"""API version 1."""
from fastapi import APIRouter
from app.api.v1.endpoints import items

router = APIRouter()
router.include_router(items.router, prefix="/items", tags=["items"])
