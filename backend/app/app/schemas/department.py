"""Department properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class DepartmentBase(BaseModel):
    name: Optional[str]
    manager_id: Optional[int]


# Properties to receive via API on creation
class DepartmentCreate(DepartmentBase):
    name: str
    manager_id: int


# Properties to receive via API on update
class DepartmentUpdate(DepartmentBase):
    pass


class DepartmentInDBBase(DepartmentBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Department(DepartmentInDBBase):
    pass


# Additional properties stored in DB
class DepartmentInDB(DepartmentInDBBase):
    pass
