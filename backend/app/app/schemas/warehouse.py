"""Warehouse properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class WarehouseBase(BaseModel):
    address_id: Optional[int]
    email: Optional[str]
    phone_number: Optional[str]


# Properties to receive via API on creation
class WarehouseCreate(WarehouseBase):
    address_id: int
    email: str


# Properties to receive via API on update
class WarehouseUpdate(WarehouseBase):
    pass


class WarehouseInDBBase(WarehouseBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Warehouse(WarehouseInDBBase):
    pass


# Additional properties stored in DB
class WarehouseInDB(WarehouseInDBBase):
    pass
