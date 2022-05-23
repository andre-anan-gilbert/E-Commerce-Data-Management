"""Product endpoint."""
from typing import Any, List

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import dependencies

router = APIRouter()


@router.get('/{item_number}', response_model=schemas.Product)
def read_product() -> Any:
    """Retrieve a product by its product number."""
    return {'message': 'The endpoint for retrieval of a single product is not yet implemented.'}


@router.get('/', response_model=List[schemas.Product])
def read_products() -> Any:
    """Retrieve all products."""
    return [{'message': 'The endpoint for retrieval of all products is not yet implemented.'}]


@router.post('/', response_model=schemas.Product)
def create_product(
        *,
        database: Session = Depends(dependencies.get_database_session),
        product_in: schemas.ProductCreate,
        current_user: models.User = Depends(dependencies.get_current_user),  # pylint: disable=unused-argument
) -> Any:
    """Create a new product."""
    product = crud.product.create(database, obj_in=product_in)
    return product


@router.put('/{item_number}', response_model=schemas.Product)
def update_product() -> Any:
    """Update a product."""
    return {'message': 'The endpoint for product updating is not yet implemented.'}


@router.delete('/{item_number}', response_model=schemas.Product)
def delete_product() -> Any:
    """Delete a product."""
    return {'message': 'The endpoint for product deletion is not yet implemented.'}
