"""Product properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class ProductBase(BaseModel):
    # implemented when API functionalities are implemented
    name: Optional[str]
    price: Optional[float]


# Properties to receive via API on creation
class ProductCreate(ProductBase):
    # implemented when API functionalities are implemented
    name: str
    price: float


# Properties to receive via API on update
class ProductUpdate(ProductBase):
    pass


class ProductInDBBase(ProductBase):
    _id: int
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
