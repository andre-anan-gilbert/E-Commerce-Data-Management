"""Address 2 customer database model."""
from sqlalchemy import Column, Integer
from app.database.base_class import Base


class Address2Customer(Base):
    """Class that represents the address of a customer."""
    customer_id = Column(Integer, primary_key=True)
    address_id = Column(Integer, primary_key=True)
