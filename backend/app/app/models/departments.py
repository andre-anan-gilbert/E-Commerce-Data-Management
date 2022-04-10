"""Departments database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class Departments(Base):
    """Class that represents departments where employees work."""
    _id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    manager = Column(Integer, index=True)
