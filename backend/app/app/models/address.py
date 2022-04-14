"""Address database model."""
from sqlalchemy import Column, Integer, String
from app.database.session import Base


class Address(Base):
    """Class that represents addresses."""
    __tablename__ = 'address'

    _id = Column(Integer, primary_key=True, index=True)
    country = Column(String, index=True)
    region = Column(String, index=True)
    postal_code = Column(String, index=True)
    street = Column(String, index=True)
    house_number = Column(Integer, index=True)
