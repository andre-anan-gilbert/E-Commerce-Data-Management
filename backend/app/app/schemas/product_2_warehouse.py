"""Product2Warehouse properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class Product2WarehouseBase(BaseModel):
    product_id: Optional[int]
    warehouse_id: Optional[int]
    number_in_stock: Optional[int]


# Properties to receive via API on creation
class Product2WarehouseCreate(Product2WarehouseBase):
    product_id: int
    warehouse_id: int
    number_in_stock: int


# Properties to receive via API on update
class Product2WarehouseUpdate(Product2WarehouseBase):
    pass


class Product2WarehouseInDBBase(Product2WarehouseBase):

    class Config:
        orm_mode = True


# Additional properties to return via API
class Product2Warehouse(Product2WarehouseInDBBase):
    pass


# Additional properties stored in DB
class Product2WarehouseInDB(Product2WarehouseInDBBase):
    pass
