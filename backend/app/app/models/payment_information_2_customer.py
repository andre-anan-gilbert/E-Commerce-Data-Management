"""Payment information 2 customer database model."""
from sqlalchemy import Column, Boolean, Integer, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class PaymentInformation2Customer(Base):
    """Class that represents the assignment of payment information to customers."""
    __tablename__ = 'payment_information_2_customer'

    customer_number = Column(Integer, ForeignKey('customer.customer_number'), primary_key=True, index=True)
    payment_information_id = Column(Integer, ForeignKey('payment_information._id'), primary_key=True, index=True)
    is_default = Column(Boolean)

    customer = relationship('Customer', backref='payment_information_associations')
    payment_information = relationship('PaymentInformation', backref='customer_associations')
