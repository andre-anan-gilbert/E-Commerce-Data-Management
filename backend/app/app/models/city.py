"""Postal code 2 city database model."""
from sqlalchemy import Column, String
from app.database.session import Base


class City(Base):
    """Class that represents the assignment of postal codes to city names."""
    __tablename__ = 'city'

    postal_code = Column(String, primary_key=True, index=True)
    city = Column(String, index=True)
