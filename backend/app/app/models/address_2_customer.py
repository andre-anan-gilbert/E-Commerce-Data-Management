"""Address 2 customer database model."""
from sqlalchemy import Column, Integer
from app.database.session import Base


class Address2Customer(Base):
    """Class that represents the assignment of addresses to customers."""
    __tablename__ = 'address_2_customer'

    customer_number = Column(Integer, primary_key=True)
    address_id = Column(Integer, primary_key=True)
