"""Item Router."""
from fastapi import APIRouter, status

router = APIRouter(prefix='/item', tags=['Item'])


@router.get('/', status_code=status.HTTP_200_OK)
async def get_items():
    return {'message': 'Hello Items'}
