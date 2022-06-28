"""Shipping Service properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class ShippingServiceBase(BaseModel):
    name: Optional[str]
    address_id: Optional[int]
    email: Optional[str]
    phone_number: Optional[str]


# Properties to receive via API on creation
class ShippingServiceCreate(ShippingServiceBase):
    name: str
    address_id: int
    email: str


# Properties to receive via API on update
class ShippingServiceUpdate(ShippingServiceBase):
    pass


class ShippingServiceInDBBase(ShippingServiceBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class ShippingService(ShippingServiceInDBBase):
    pass


# Additional properties stored in DB
class ShippingServiceInDB(ShippingServiceInDBBase):
    pass
