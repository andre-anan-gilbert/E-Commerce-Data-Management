"""Order database model."""
import enum
from sqlalchemy import Column, Enum, Integer, ForeignKey
from sqlalchemy.orm import relationship, backref
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class OrderStatus(enum.Enum):
    """Class that represents the status of the order."""
    OPEN = 1
    SENT = 2
    DELIVERED = 3


class Order(Base, BaseMixin):
    """Class that represents orders made by a customer."""
    __tablename__ = 'order'

    customer_id = Column(Integer, ForeignKey('customer.id'), index=True)
    invoice_id = Column(Integer, ForeignKey('invoice.id'), unique=True, index=True)
    status = Column(Enum(OrderStatus), nullable=False, default=OrderStatus.OPEN, index=True)
    address_id = Column(Integer, ForeignKey('address.id'), index=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), index=True)
    shipping_service_id = Column(Integer, ForeignKey('shipping_service.id'), index=True)

    customer = relationship('Customer', backref='orders', foreign_keys=[customer_id])
    # invoice needs a different use of backref since the relationship is one to one
    invoice = relationship('Invoice', backref=backref('order', uselist=False))
    address = relationship('Address', backref='orders', foreign_keys=[address_id])
    employee = relationship('Employee', backref='orders', foreign_keys=[employee_id])
    shipping_service = relationship('ShippingService', backref='orders', foreign_keys=[shipping_service_id])
