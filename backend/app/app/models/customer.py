"""Customer database model."""
from sqlalchemy import Column, String
from app.database.session import Base
from app.database.mixins import BaseMixin


class Customer(Base, BaseMixin):
    """Class that represents customers."""
    __tablename__ = 'customer'

    salutation = Column(String, index=True)
    first_name = Column(String, nullable=False, index=True)
    last_name = Column(String, nullable=False, index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    phone_number = Column(String, unique=True, index=True)
