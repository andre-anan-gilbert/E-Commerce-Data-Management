"""Shipping service database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class ShippingService(Base, BaseMixin):
    """Class that represents shipping services."""
    __tablename__ = 'shipping_service'

    name = Column(String, nullable=False, index=True)
    address_id = Column(Integer, ForeignKey('address.id'), index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    phone_number = Column(String, unique=True, index=True)

    address = relationship('Address', backref='shipping_services', foreign_keys=[address_id])
