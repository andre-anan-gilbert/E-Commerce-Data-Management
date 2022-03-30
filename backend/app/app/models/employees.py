"""Employees database model."""
from sqlalchemy import Column, Integer, String
from app.database.base_class import Base


class Employees(Base):
    """Class that represents employees."""
    employee_number = Column(Integer, primary_key=True, index=True)
    ssn = Column(Integer, unique=True, index=True)
    title = Column(String, index=True)
    first_name = Column(String, index=True)
    last_name = Column(String, index=True)
    job_title = Column(String, index=True)
    department_id = Column(Integer, index=True)
    warehouse_id = Column(Integer, index=True)
    address_id = Column(Integer, index=True)
    email = Column(String, index=True)
    phone_number = Column(String, index=True)
