"""Order database model."""
import enum
from datetime import datetime
from sqlalchemy import Column, Enum, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.mixins import BaseMixin


class OrderStatus(enum.Enum):
    """Class that represents the status of the order."""
    OPEN = 'OPEN'
    SENT = 'SENT'
    DELIVERED = 'DELIVERED'


class Order(Base, BaseMixin):
    """Class that represents orders made by a customer."""
    __tablename__ = 'order'

    customer_id = Column(Integer, ForeignKey('customer.id'), index=True)
    status = Column(Enum(OrderStatus), nullable=False, default=OrderStatus.OPEN, index=True)
    order_date = Column(DateTime, nullable=False, default=datetime.utcnow, index=True)
    address_id = Column(Integer, ForeignKey('address.id'), index=True)
    employee_id = Column(Integer, ForeignKey('employee.id'), index=True)
    shipping_service_id = Column(Integer, ForeignKey('shipping_service.id'), index=True)

    customer = relationship('Customer', backref='orders', foreign_keys=[customer_id])
    address = relationship('Address', backref='orders', foreign_keys=[address_id])
    employee = relationship('Employee', backref='orders', foreign_keys=[employee_id])
    shipping_service = relationship('ShippingService', backref='orders', foreign_keys=[shipping_service_id])
