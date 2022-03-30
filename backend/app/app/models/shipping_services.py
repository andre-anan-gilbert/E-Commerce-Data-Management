"""Shipping services database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class ShippingServices(Base):
    """Class that represents the shipping services."""
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    address_id = Column(Integer, index=True)
    email = Column(String, index=True)
    phone_number = Column(String, index=True)
