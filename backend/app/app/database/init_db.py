"""Initializes the database with data."""
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import base  # pylint: disable=unused-import
from app.core.config import settings


def run(database: Session) -> None:
    """Fills the database with initial data."""

    is_initial_start = False

    # create initial users
    user = crud.user.get_by_email(database, email=settings.TEST_USER)
    if user is None:
        is_initial_start = True
        user_in = schemas.UserCreate(email=settings.TEST_USER, password=settings.TEST_USER_PASSWORD)
        user = crud.user.create(database, obj_in=user_in)

    if is_initial_start:

        # create initial categories

        category_data = [{
            'name': 'Category A',
            'description': 'A test category for initial data.',
        }, {
            'name': 'Category B',
            'description': 'Another test category for initial data.',
        }]

        categories = []

        for entry in category_data:
            categories.append(crud.category.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial cities

        # purely fictional test examples
        city_data = {
            'postal_code': '33602',
            'name': 'Bielefeld',
        }

        city = crud.city.create_with_user_and_timestamp(database, obj_in=city_data, edited_by=user.id)

        # create initial addresses

        address_data = {
            'country': 'Germany',
            'region': 'North Rhine-Westphalia',
            'postal_code': city.postal_code,
            'street': 'Example Street',
            'house_number': 1,
        }

        address = crud.address.create_with_user_and_timestamp(database, obj_in=address_data, edited_by=user.id)

        # create initial suppliers

        supplier_data = {
            'name': 'Supplier A',
            'address_id': address.id,
            'phone_number': '+491711234567',
            'email': 'person@supplier.com',
        }

        supplier = crud.supplier.create_with_user_and_timestamp(database, obj_in=supplier_data, edited_by=user.id)

        # create initial products

        product_data = [{
            'name': 'Product A',
            'price': 42.0,
            'category_id': categories[0].id,
            'supplier_id': supplier.id,
        }, {
            'name': 'Product B',
            'price': 27.0,
            'category_id': categories[0].id,
            'supplier_id': supplier.id,
        }, {
            'name': 'Product C',
            'price': 3.50,
            'category_id': categories[1].id,
            'supplier_id': supplier.id,
        }]

        products = []

        for entry in product_data:
            products.append(crud.product.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))
