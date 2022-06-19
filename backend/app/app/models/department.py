"""Department database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Department(Base, BaseMixin):
    """Class that represents departments where employees work."""
    __tablename__ = 'department'

    name = Column(String, nullable=False, index=True)
    manager_id = Column(Integer, ForeignKey('employee.id'), index=True)

    manager = relationship('Employee', backref='departments', foreign_keys=[manager_id])
