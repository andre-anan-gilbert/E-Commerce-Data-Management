"""Order database model."""
import enum
from sqlalchemy import Column, Enum, Integer, ForeignKey
from sqlalchemy.orm import relationship, backref
from app.database.session import Base


class OrderStatus(enum.Enum):
    """Class that represents the status of the order."""
    OPEN = 1
    SENT = 2
    DELIVERED = 3


class Order(Base):
    """Class that represents orders made by a customer."""
    __tablename__ = 'order'

    _id = Column(Integer, primary_key=True, index=True)
    customer_number = Column(Integer, ForeignKey('customer.customer_number'), index=True)
    invoice_id = Column(Integer, ForeignKey('invoice._id'), unique=True, index=True)
    status = Column(Enum(OrderStatus), index=True)
    address_id = Column(Integer, ForeignKey('address._id'), index=True)
    employee_id = Column(Integer, ForeignKey('employee.employee_number'), index=True)
    shipping_service_id = Column(Integer, ForeignKey('shipping_service._id'), index=True)

    customer = relationship('Customer', backref='orders')
    # invoice needs a different use of backref since the relationship is one to one
    invoice = relationship('Invoice', backref=backref('order', uselist=False))
    address = relationship('Address', backref='orders')
    employee = relationship('Employee', backref='orders')
    shipping_service = relationship('ShippingService', backref='orders')
