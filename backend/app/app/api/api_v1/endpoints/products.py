"""Product endpoint."""
from typing import Any, List

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app import crud, models, schemas
from app.api import dependencies

router = APIRouter()


@router.get('/get-product/{item_number}', response_model=schemas.Product)
def read_product(
        *,
        database: Session = Depends(dependencies.get_database_session),
        id: int,
        current_user: models.User = Depends(dependencies.get_current_user),  # pylint: disable=unused-argument
) -> Any:
    """Retrieve a product by its product number."""
    product = crud.product.get(database, obj_id=id)

    if not product:
        raise HTTPException(status_code=404, detail='Product not found')

    return product


@router.get('/get-products', response_model=List[schemas.Product])
def read_products(
        database: Session = Depends(dependencies.get_database_session),
        skip: int = 0,
        limit: int = 100,
        current_user: models.User = Depends(dependencies.get_current_user),  # pylint: disable=unused-argument
) -> Any:
    """Retrieve all products."""
    products = crud.product.get_multi(database, skip=skip, limit=limit)

    if len(products) == 0:
        raise HTTPException(status_code=404, detail='No products were found')

    return products


@router.post('/create', response_model=schemas.Product)
def create_product(
        *,
        database: Session = Depends(dependencies.get_database_session),
        product_in: schemas.ProductCreate,
        current_user: models.User = Depends(dependencies.get_current_user),  # pylint: disable=unused-argument
) -> Any:
    """Create a new product."""
    product = crud.product.create(database, obj_in=product_in)

    return product


@router.put('/update/{item_number}', response_model=schemas.Product)
def update_product(
        *,
        database: Session = Depends(dependencies.get_database_session),
        id: int,
        product_in: schemas.ProductUpdate,
        current_user: models.User = Depends(dependencies.get_current_user),  # pylint: disable=unused-argument
) -> Any:
    """Update a product."""
    product = crud.product.get(database, obj_id=id)

    if not product:
        raise HTTPException(status_code=404, detail='Product not found')

    product = crud.product.update(database, database_obj=product, obj_in=product_in)

    return product


@router.delete('/delete/{item_number}', response_model=schemas.Product)
def delete_product(
        *,
        database: Session = Depends(dependencies.get_database_session),
        id: int,
        current_user: models.User = Depends(dependencies.get_current_user),  # pylint: disable=unused-argument
) -> Any:
    """Delete a product."""
    product = crud.product.get(database, obj_id=id)

    if not product:
        raise HTTPException(status_code=404, detail='Product not found')

    product = crud.product.remove(database, obj_id=id)

    return product
