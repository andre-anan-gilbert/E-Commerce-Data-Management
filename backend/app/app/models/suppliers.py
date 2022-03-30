"""Suppliers database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class Suppliers(Base):
    """Class that represents the suppliers."""
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    address_id = Column(Integer, index=True)
    phone_number = Column(String, index=True)
    email = Column(String, index=True)
