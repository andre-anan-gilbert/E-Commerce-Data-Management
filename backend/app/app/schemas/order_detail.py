"""Order Detail properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class OrderDetailBase(BaseModel):
    order_id: Optional[int]
    product_id: Optional[int]
    price_at_time_of_purchase: Optional[float]
    number_of_items: Optional[int]


# Properties to receive via API on creation
class OrderDetailCreate(OrderDetailBase):
    order_id: int
    product_id: int
    price_at_time_of_purchase: float
    number_of_items: int


# Properties to receive via API on update
class OrderDetailUpdate(OrderDetailBase):
    pass


class OrderDetailInDBBase(OrderDetailBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class OrderDetail(OrderDetailInDBBase):
    pass


# Additional properties stored in DB
class OrderDetailInDB(OrderDetailInDBBase):
    pass
