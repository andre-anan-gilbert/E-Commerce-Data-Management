"""Initializes the database with data."""
from unicodedata import category
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import base  # pylint: disable=unused-import
from app.core.config import settings


def run(database: Session) -> None:
    """Fills the database with initial data."""
    user = crud.user.get_by_email(database, email=settings.TEST_USER)
    if user is None:
        user_in = schemas.UserCreate(email=settings.TEST_USER, password=settings.TEST_USER_PASSWORD)
        user = crud.user.create(database, obj_in=user_in)

    categories = [{
        'name': 'Category A',
        'description': 'A test category for initial data.'
    }, {
        'name': 'Category B',
        'description': 'Another test category for initial data.'
    }]

    for category in categories:
        crud.category.create(database, obj_in=category)

    # create supplier

    # products = [{
    #     'item_number': 1,
    # }, {}, {}]

    # for product in products:
    #     crud.product.create(database, obj_in=product)
