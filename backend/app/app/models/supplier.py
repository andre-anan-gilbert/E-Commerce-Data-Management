"""Supplier database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Supplier(Base, BaseMixin):
    """Class that represents suppliers."""
    __tablename__ = 'supplier'

    name = Column(String, nullable=False, index=True)
    address_id = Column(Integer, ForeignKey('address.id'), index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    phone_number = Column(String, unique=True, index=True)

    address = relationship('Address', backref='suppliers', foreign_keys=[address_id])
