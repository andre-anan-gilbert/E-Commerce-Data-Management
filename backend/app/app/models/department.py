"""Department database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class Department(Base):
    """Class that represents departments where employees work."""
    __tablename__ = 'department'

    _id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    manager = Column(Integer, ForeignKey('employee.employee_number'), index=True)

    employee = relationship('Employee', backref='departments', foreign_keys=[manager])
