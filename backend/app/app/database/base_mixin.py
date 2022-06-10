"""Base Model to inherit from if time- and user stamps are desired."""
from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.ext.declarative import as_declarative, declared_attr
from sqlalchemy.orm import relationship


class BaseMixin:
    id = Column(Integer, primary_key=True, index=True)
    created = Column(DateTime)
    updated = Column(DateTime)

    @declared_attr
    def edited_by(cls):
        return Column(Integer, ForeignKey('user.id'), index=True)

    @declared_attr
    def user(cls):
        return relationship('User', backref=f'edits_{cls.__name__.lower()}')
