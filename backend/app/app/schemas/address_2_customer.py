"""Address2Customer properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class Address2CustomerBase(BaseModel):
    address_id: Optional[int]
    customer_id: Optional[int]


# Properties to receive via API on creation
class Address2CustomerCreate(Address2CustomerBase):
    address_id: int
    customer_id: int


# Properties to receive via API on update
class Address2CustomerUpdate(Address2CustomerBase):
    pass


class Address2CustomerInDBBase(Address2CustomerBase):

    class Config:
        orm_mode = True


# Additional properties to return via API
class Address2Customer(Address2CustomerInDBBase):
    pass


# Additional properties stored in DB
class Address2CustomerInDB(Address2CustomerInDBBase):
    pass
