"""Category database model."""
from sqlalchemy import Column, Integer, String
from app.database.session import Base


class Category(Base):
    """Class that represents categories of products."""
    __tablename__ = 'category'

    _id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
