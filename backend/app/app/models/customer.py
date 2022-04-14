"""Customer database model."""
from sqlalchemy import Column, Integer, String
from app.database.session import Base


class Customer(Base):
    """Class that represents customers."""
    __tablename__ = 'customer'

    customer_number = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    email = Column(String, index=True)
    phone_number = Column(String, index=True)
