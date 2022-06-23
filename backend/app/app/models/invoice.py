"""Invoice database model."""
import enum
from sqlalchemy import Column, Enum, Integer, Date, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.mixins import BaseMixin


class InvoiceStatus(enum.Enum):
    """Class that represents the status of an invoice."""
    OPEN = 'OPEN'
    OVERDUE = 'OVERDUE'
    PAID = 'PAID'


class Invoice(Base, BaseMixin):
    """Class that represents invoices."""
    __tablename__ = 'invoice'

    status = Column(Enum(InvoiceStatus), nullable=False, default=InvoiceStatus.OPEN, index=True)
    issue_date = Column(Date, nullable=False, index=True)
    due_date = Column(Date, nullable=False, index=True)
    payment_information_id = Column(Integer, ForeignKey('payment_information.id'), index=True)

    payment_information = relationship('PaymentInformation', backref='invoices', foreign_keys=[payment_information_id])
