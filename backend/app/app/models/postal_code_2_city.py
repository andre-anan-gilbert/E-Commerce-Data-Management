"""Postal code 2 city database model."""
from sqlalchemy import Column, String
from app.database.base_class import Base


class PostalCode2City(Base):
    """Class that represents the postal code of a city."""
    postal_code = Column(String, primary_key=True, index=True)
    city = Column(String, index=True)
