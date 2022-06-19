"""Employee properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class EmployeeBase(BaseModel):
    """Why the fuck does pylint suddenly want a docstring for this specific schema."""
    ssn: Optional[str]
    salutation: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    job_title: Optional[str]
    department_id: Optional[int]
    warehouse_id: Optional[int]
    address_id: Optional[int]
    email: Optional[str]
    phone_number: Optional[str]


# Properties to receive via API on creation
class EmployeeCreate(EmployeeBase):
    ssn: str
    first_name: str
    last_name: str
    job_title: str
    department_id: int
    warehouse_id: int
    address_id: int
    email: str


# Properties to receive via API on update
class EmployeeUpdate(EmployeeBase):
    pass


class EmployeeInDBBase(EmployeeBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Employee(EmployeeInDBBase):
    pass


# Additional properties stored in DB
class EmployeeInDB(EmployeeInDBBase):
    pass
