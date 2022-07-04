"""Customer properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class CustomerBase(BaseModel):
    salutation: Optional[str]
    first_name: Optional[str]
    last_name: Optional[str]
    email: Optional[str]
    phone_number: Optional[str]


# Properties to receive via API on creation
class CustomerCreate(CustomerBase):
    first_name: str
    last_name: str
    email: str


# Properties to receive via API on update
class CustomerUpdate(CustomerBase):
    pass


class CustomerInDBBase(CustomerBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Customer(CustomerInDBBase):
    pass


# Additional properties stored in DB
class CustomerInDB(CustomerInDBBase):
    pass
