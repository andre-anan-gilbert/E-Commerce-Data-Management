"""Categories database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class Categories(Base):
    """Class that represents the categories of the products."""
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    description = Column(String, index=True)
