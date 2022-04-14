"""Payment information database model."""
from sqlalchemy import Column, Integer, String
from app.database.session import Base


class PaymentInformation(Base):
    """Class that represents payment information."""
    __tablename__ = 'payment_information'

    _id = Column(Integer, primary_key=True, index=True)
    iban = Column(String, unique=True, index=True)
    bic = Column(String, index=True)
