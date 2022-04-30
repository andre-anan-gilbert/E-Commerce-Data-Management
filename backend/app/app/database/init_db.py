"""Initialize database with data."""
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import base  # pylint: disable=unused-import
from app.core.config import settings


def run(database: Session) -> None:
    """Fills the database with initial data."""
    user = crud.user.get_by_email(database, email=settings.TEST_USER)
    if not user:
        user_in = schemas.UserCreate(
            email=settings.TEST_USER,
            password=settings.TEST_USER_PASSWORD,
        )
        user = crud.user.create(database, obj_in=user_in)
