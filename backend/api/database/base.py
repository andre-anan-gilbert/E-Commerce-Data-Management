"""Import all the models, so that Base has them before being imported by Alembic (Base.metadata)."""
from api.database.session import Base  # pylint: disable=unused-import
