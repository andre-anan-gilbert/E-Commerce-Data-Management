"""Shipping service database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class ShippingService(Base):
    """Class that represents shipping services."""
    __tablename__ = 'shipping_service'

    _id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    address_id = Column(Integer, ForeignKey('address._id'), index=True)
    email = Column(String, index=True)
    phone_number = Column(String, index=True)

    address = relationship('Address', backref='shipping_services')
