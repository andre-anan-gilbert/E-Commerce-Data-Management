"""Import all the models, so that Base has them before being imported by Alembic (Base.metadata)."""

# pylint: skip-file
from app.database.base_class import Base
from app.models.products import Products