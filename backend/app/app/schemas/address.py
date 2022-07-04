"""Address properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class AddressBase(BaseModel):
    country: Optional[str]
    region: Optional[str]
    postal_code: Optional[str]
    street: Optional[str]
    house_number: Optional[int]


# Properties to receive via API on creation
class AddressCreate(AddressBase):
    country: str
    postal_code: str
    street: str
    house_number: int


# Properties to receive via API on update
class AddressUpdate(AddressBase):
    pass


class AddressInDBBase(AddressBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Address(AddressInDBBase):
    pass


# Additional properties stored in DB
class AddressInDB(AddressInDBBase):
    pass
