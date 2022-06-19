"""Postal code 2 city database model."""
from sqlalchemy import Column, DateTime, ForeignKey, Index, Integer, String
from sqlalchemy.orm import relationship
from app.database.session import Base


class City(Base):
    """Class that represents the assignment of postal codes to city names."""
    __tablename__ = 'city'

    postal_code = Column(String, primary_key=True, index=True)
    name = Column(String, index=True)
    created = Column(DateTime)
    updated = Column(DateTime)
    edited_by = Column(Integer, ForeignKey('user.id'), index=True)

    user = relationship('User', backref='edits')

    __table_args__ = (Index('city_postal_code_uc', 'postal_code', 'name'),)
