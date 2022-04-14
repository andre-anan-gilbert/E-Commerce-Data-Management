"""Employee database model."""
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from app.database.session import Base


class Employee(Base):
    """Class that represents employees."""
    __tablename__ = 'employee'

    employee_number = Column(Integer, primary_key=True, index=True)
    ssn = Column(Integer, unique=True, index=True)
    title = Column(String, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    job_title = Column(String, index=True)
    department_id = Column(Integer, ForeignKey('department._id'), index=True)
    warehouse_id = Column(Integer, ForeignKey('warehouse._id'), index=True)
    address_id = Column(Integer, ForeignKey('address._id'), index=True)
    email = Column(String, index=True)
    phone_number = Column(String, index=True)

    department = relationship('Department', backref='employees')
