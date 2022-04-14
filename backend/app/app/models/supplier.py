"""Supplier database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class Supplier(Base):
    """Class that represents suppliers."""
    __tablename__ = 'supplier'

    _id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    address_id = Column(Integer, ForeignKey('address._id'), index=True)
    phone_number = Column(String, index=True)
    email = Column(String, index=True)

    address = relationship('Address', backref='suppliers')
