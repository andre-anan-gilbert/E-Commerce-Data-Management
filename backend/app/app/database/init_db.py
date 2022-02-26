"""Initialize postgreSQL with data."""
from sqlalchemy.orm import Session
from app.database import base  # pylint: disable=unused-import


def run(database: Session) -> None:
    database.execute("SELECT 1")
