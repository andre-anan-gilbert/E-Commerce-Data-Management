"""Invoice database model."""
import enum
from datetime import datetime, timedelta
from sqlalchemy import Column, Enum, Integer, DateTime, ForeignKey
from sqlalchemy.orm import relationship, backref
from app.database.session import Base
from app.database.mixins import BaseMixin


class InvoiceStatus(enum.Enum):
    """Class that represents the status of an invoice."""
    OPEN = 'OPEN'
    OVERDUE = 'OVERDUE'
    PAID = 'PAID'


def get_default_due_date() -> datetime:
    """Return default value for invoice due date."""
    return datetime.utcnow() + timedelta(days=30)


class Invoice(Base, BaseMixin):
    """Class that represents invoices."""
    __tablename__ = 'invoice'

    status = Column(Enum(InvoiceStatus), nullable=False, default=InvoiceStatus.OPEN, index=True)
    issue_date = Column(DateTime, nullable=False, default=datetime.utcnow, index=True)
    due_date = Column(DateTime, nullable=False, default=get_default_due_date, index=True)
    order_id = Column(Integer, ForeignKey('order.id'), unique=True, index=True)
    payment_information_id = Column(Integer, ForeignKey('payment_information.id'), index=True)

    # order needs a different use of backref than other entities, since the relationship is one to one
    order = relationship('Order', backref=backref('invoice', uselist=False))
    payment_information = relationship('PaymentInformation', backref='invoices', foreign_keys=[payment_information_id])
