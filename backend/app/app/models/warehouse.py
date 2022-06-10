"""Warehouse database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Warehouse(Base, BaseMixin):
    """Class that represents warehouses."""
    __tablename__ = 'warehouse'

    address_id = Column(Integer, ForeignKey('address.id'), index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    phone_number = Column(String, unique=True, index=True)

    address = relationship('Address', backref='warehouses', foreign_keys=[address_id])
