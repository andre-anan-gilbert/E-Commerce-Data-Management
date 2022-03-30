"""Payment information 2 customer database model."""
from sqlalchemy import Column, Boolean, Integer
from app.database.base_class import Base


class PaymentInformation2Customer(Base):
    """Class that represents the payment information of a purchase of a customer."""
    customer_id = Column(Integer, primary_key=True, index=True)
    payment_information_id = Column(Integer, primary_key=True, index=True)
    is_default = Column(Boolean)
