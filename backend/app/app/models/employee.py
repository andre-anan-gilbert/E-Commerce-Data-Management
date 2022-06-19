"""Employee database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base
from app.database.base_mixin import BaseMixin


class Employee(Base, BaseMixin):
    """Class that represents employees."""
    __tablename__ = 'employee'

    ssn = Column(String, unique=True, index=True)
    salutation = Column(String, index=True)
    first_name = Column(String, nullable=False, index=True)
    last_name = Column(String, nullable=False, index=True)
    job_title = Column(String, nullable=False, index=True)
    department_id = Column(Integer, ForeignKey('department.id'), index=True)
    warehouse_id = Column(Integer, ForeignKey('warehouse.id'), index=True)
    address_id = Column(Integer, ForeignKey('address.id'), index=True)
    email = Column(String, unique=True, nullable=False, index=True)
    phone_number = Column(String, unique=True, index=True)

    department = relationship('Department', backref='employees', foreign_keys=[department_id])
