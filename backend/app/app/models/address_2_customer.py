"""Address 2 customer database model."""
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class Address2Customer(Base):
    """Class that represents the assignment of addresses to customers."""
    __tablename__ = 'address_2_customer'

    customer_number = Column(Integer, ForeignKey('customer.customer_number'), primary_key=True)
    address_id = Column(Integer, ForeignKey('address._id'), primary_key=True)

    customer = relationship('Customer', backref='adress_associations')
    address = relationship('Address', backref='customer_associations')
