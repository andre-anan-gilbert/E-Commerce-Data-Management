"""Invoice database model."""
import enum
from sqlalchemy import Column, Enum, Integer, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class InvoiceStatus(enum.Enum):
    """Class that represents the status of an invoice."""
    OPEN = 1
    OVERDUE = 2
    PAID = 3


class Invoice(Base):
    """Class that represents invoices."""
    __tablename__ = 'invoice'

    _id = Column(Integer, primary_key=True, index=True)
    status = Column(Enum(InvoiceStatus), index=True)
    issue_date = Column(Date, index=True)
    due_date = Column(Date, index=True)
    payment_information_id = Column(Integer, ForeignKey('payment_information._id'), index=True)

    payment_information = relationship('PaymentInformation', backref='invoices')
