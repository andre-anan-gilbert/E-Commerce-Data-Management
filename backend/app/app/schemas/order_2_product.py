"""Order2Product properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class Order2ProductBase(BaseModel):
    order_id: Optional[int]
    product_id: Optional[int]
    price_at_time_of_purchase: Optional[float]
    number_of_items: Optional[int]


# Properties to receive via API on creation
class Order2ProductCreate(Order2ProductBase):
    order_id: int
    product_id: int
    price_at_time_of_purchase: float
    number_of_items: int


# Properties to receive via API on update
class Order2ProductUpdate(Order2ProductBase):
    pass


class Order2ProductInDBBase(Order2ProductBase):

    class Config:
        orm_mode = True


# Additional properties to return via API
class Order2Product(Order2ProductInDBBase):
    pass


# Additional properties stored in DB
class Order2ProductInDB(Order2ProductInDBBase):
    pass
