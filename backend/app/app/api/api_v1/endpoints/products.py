from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import dependencies

router = APIRouter()


@router.get('/{item_number}', response_model=schemas.Product)
def read_product() -> Any:
    """Retrieve a product by its product number.

    Returns:
        _description_
    """
    return {'message': 'The endpoint for retrieval of a single product is not yet implemented.'}


@router.get('/', response_model=List[schemas.Product])
def read_products() -> Any:
    """Retrieve all products.

    Returns:
        _description_
    """
    return [{'message': 'The endpoint for retrieval of all products is not yet implemented.'}]


@router.post('/', response_model=schemas.Product)
def create_product() -> Any:
    """Create a new product.

    Returns:
        _description_
    """
    return {'message': 'The endpoint for product creation is not yet implemented.'}


@router.put('/{item_number}', response_model=schemas.Product)
def update_product() -> Any:
    """Update a product.

    Returns:
        _description_
    """
    return {'message': 'The endpoint for product updating is not yet implemented.'}


@router.delete('/{item_number}', response_model=schemas.Product)
def delete_product() -> Any:
    """Delete a product

    Returns:
        _description_
    """
    return {'message': 'The endpoint for product deletion is not yet implemented.'}