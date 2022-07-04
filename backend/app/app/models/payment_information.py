"""Payment information database model."""
from sqlalchemy import Column, String
from app.database.session import Base
from app.database.mixins import BaseMixin


class PaymentInformation(Base, BaseMixin):
    """Class that represents payment information."""
    __tablename__ = 'payment_information'

    iban = Column(String, unique=True, nullable=False, index=True)
    bic = Column(String, index=True)
