"""Warehouses database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class Warehouses(Base):
    """Class that represents the warehouses."""
    _id = Column(Integer, primary_key=True, index=True)
    address_id = Column(Integer, index=True)
    phone_number = Column(String, index=True)
    email = Column(String, index=True)
