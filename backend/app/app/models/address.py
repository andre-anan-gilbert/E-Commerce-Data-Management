"""Address database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Address(Base, BaseMixin):
    """Class that represents addresses."""
    __tablename__ = 'address'

    country = Column(String, nullable=False, index=True)
    region = Column(String, index=True)
    postal_code = Column(String, ForeignKey('city.postal_code'), index=True)
    street = Column(String, nullable=False, index=True)
    house_number = Column(Integer, nullable=False, index=True)

    postal_code_rel = relationship('City', backref='addresses', foreign_keys=[postal_code])
