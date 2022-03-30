"""Addresses database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class Addresses(Base):
    """Class that represents addresses."""
    id = Column(Integer, primary_key=True, index=True)
    country = Column(String, index=True)
    region = Column(String, index=True)
    postal_code = Column(String, index=True)
    street = Column(String, index=True)
    house_number = Column(Integer, index=True)
