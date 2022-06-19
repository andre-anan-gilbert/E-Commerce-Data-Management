"""Product properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class ProductBase(BaseModel):
    name: Optional[str]
    price: Optional[float]
    description: Optional[str]
    category_id: Optional[int]
    supplier_id: Optional[int]


# Properties to receive via API on creation
class ProductCreate(ProductBase):
    name: str
    price: float
    category_id: int
    supplier_id: int


# Properties to receive via API on update
class ProductUpdate(ProductBase):
    pass


class ProductInDBBase(ProductBase):
    id: int
    category_id: int
    supplier_id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Product(ProductInDBBase):
    pass


# Additional properties stored in DB
class ProductInDB(ProductInDBBase):
    pass
