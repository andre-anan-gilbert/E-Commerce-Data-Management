"""Category database model."""
from sqlalchemy import Column, String
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Category(Base, BaseMixin):
    """Class that represents categories of products."""
    __tablename__ = 'category'

    name = Column(String, unique=True, nullable=False, index=True)
    description = Column(String, index=True)
