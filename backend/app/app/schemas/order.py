"""Order properties."""
from typing import Optional

from pydantic import BaseModel

from app.models.order import OrderStatus


# Shared properties
class OrderBase(BaseModel):
    customer_id: Optional[int]
    invoice_id: Optional[int]
    status: Optional[OrderStatus]
    address_id: Optional[int]
    employee_id: Optional[int]
    shipping_service_id: Optional[int]


# Properties to receive via API on creation
class OrderCreate(OrderBase):
    customer_id: int
    invoice_id: int
    address_id: int
    employee_id: int
    shipping_service_id: int


# Properties to receive via API on update
class OrderUpdate(OrderBase):
    pass


class OrderInDBBase(OrderBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Order(OrderInDBBase):
    pass


# Additional properties stored in DB
class OrderInDB(OrderInDBBase):
    pass
