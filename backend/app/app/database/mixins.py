"""SQLAlchemy Mixins to inherit from if time- and user stamps are desired."""
from datetime import datetime

from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.orm import relationship


class BaseMixin:
    """MixIn to be used with all normal models that require id and time/user-stamps."""
    id = Column(Integer, primary_key=True, index=True)
    created = Column(DateTime, default=datetime.utcnow)
    updated = Column(DateTime)

    @declared_attr
    def edited_by(cls):  # pylint: disable=no-self-argument
        return Column(Integer, ForeignKey('user.id'), index=True)

    @declared_attr
    def user(cls):  # pylint: disable=no-self-argument
        return relationship('User', backref=f'edits_{cls.__name__.lower()}')


class AssociationMixin:
    """MixIn to be used with all association objects that require time/user-stamps."""
    created = Column(DateTime, default=datetime.utcnow)
    updated = Column(DateTime)

    @declared_attr
    def edited_by(cls):  # pylint: disable=no-self-argument
        return Column(Integer, ForeignKey('user.id'), index=True)

    @declared_attr
    def user(cls):  # pylint: disable=no-self-argument
        return relationship('User', backref=f'edits_{cls.__name__.lower()}')
