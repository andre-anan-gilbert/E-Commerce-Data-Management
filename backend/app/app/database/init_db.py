"""Initializes the database with data."""
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

    categories_data = [{
        'name': 'Category A',
        'description': 'A test category for initial data.',
    }, {
        'name': 'Category B',
        'description': 'Another test category for initial data.',
    }]

    categories = []

    for category_data in categories_data:
        categories.append(crud.category.create(database, obj_in=category_data))

    # more purely fictional test examples
    city_data = {
        'postal_code': '33602',
        'city': 'Bielefeld',
    }

    city = crud.city.create(database, obj_in=city_data)

    address_data = {
        'country': 'Germany',
        'region': 'North Rhine-Westphalia',
        'postal_code': city.postal_code,
        'street': 'Example Street',
        'house_number': 1,
    }

    address = crud.address.create(database, obj_in=address_data)

    # create supplier

    # create products

    # products = [{
    #     'item_number': 1,
    # }, {}, {}]

    # for product in products:
    #     crud.product.create(database, obj_in=product)
