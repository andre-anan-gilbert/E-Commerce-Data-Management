"""Invoice properties."""
from typing import Optional
from datetime import datetime

from pydantic import BaseModel

from app.models.invoice import InvoiceStatus


# Shared properties
class InvoiceBase(BaseModel):
    status: Optional[InvoiceStatus]
    order_id: Optional[int]
    issue_date: Optional[datetime]
    due_date: Optional[datetime]
    payment_information_id: Optional[int]


# Properties to receive via API on creation
class InvoiceCreate(InvoiceBase):
    order_id: int
    issue_date: datetime
    due_date: datetime
    payment_information_id: int


# Properties to receive via API on update
class InvoiceUpdate(InvoiceBase):
    pass


class InvoiceInDBBase(InvoiceBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Invoice(InvoiceInDBBase):
    pass


# Additional properties stored in DB
class InvoiceInDB(InvoiceInDBBase):
    pass
