"""Payment information 2 customer database model."""
from sqlalchemy import Column, Boolean, Integer
from app.database.session import Base


class PaymentInformation2Customer(Base):
    """Class that represents the assignment of payment information to customers."""
    __tablename__ = 'payment_information_2_customer'

    customer_number = Column(Integer, primary_key=True, index=True)
    payment_information_id = Column(Integer, primary_key=True, index=True)
    is_default = Column(Boolean)
