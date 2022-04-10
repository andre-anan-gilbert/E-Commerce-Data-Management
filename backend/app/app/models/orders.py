"""Orders database model."""
import enum
from sqlalchemy import Column, Enum, Integer
from app.database.base_class import Base


class OrderStatus(enum.Enum):
    """Class that represents the status of the purchase order."""
    OPEN = 1
    SENT = 2
    DELIVERED = 3


class Orders(Base):
    """Class that represents the orders of customer."""
    _id = Column(Integer, primary_key=True, index=True)
    customer_number = Column(Integer, index=True)
    invoice_id = Column(Integer, unique=True, index=True)
    status = Column(Enum(OrderStatus), index=True)
    address_id = Column(Integer, index=True)
    employee_id = Column(Integer, index=True)
    shipping_services = Column(Integer, index=True)
