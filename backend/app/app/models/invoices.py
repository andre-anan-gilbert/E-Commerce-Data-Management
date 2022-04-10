"""Invoices database model."""
import enum
from sqlalchemy import Column, Enum, Integer, Date
from app.database.base_class import Base


class InvoiceStatus(enum.Enum):
    """Class that represents the status of an invoice."""
    OPEN = 1
    OVERDUE = 2
    PAID = 3


class Invoices(Base):
    """Class that represents the invoices."""
    _id = Column(Integer, primary_key=True, index=True)
    status = Column(Enum(InvoiceStatus), index=True)
    issue_date = Column(Date, index=True)
    due_date = Column(Date, index=True)
    payment_information_id = Column(Integer, index=True)
