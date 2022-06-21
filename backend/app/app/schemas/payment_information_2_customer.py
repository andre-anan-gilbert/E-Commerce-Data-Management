"""PaymentInformation2Customer properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class PaymentInformation2CustomerBase(BaseModel):
    customer_id: Optional[int]
    payment_information_id: Optional[int]
    is_default: Optional[bool]


# Properties to receive via API on creation
class PaymentInformation2CustomerCreate(PaymentInformation2CustomerBase):
    customer_id: int
    payment_information_id: int


# Properties to receive via API on update
class PaymentInformation2CustomerUpdate(PaymentInformation2CustomerBase):
    pass


class PaymentInformation2CustomerInDBBase(PaymentInformation2CustomerBase):

    class Config:
        orm_mode = True


# Additional properties to return via API
class PaymentInformation2Customer(PaymentInformation2CustomerInDBBase):
    pass


# Additional properties stored in DB
class PaymentInformation2CustomerInDB(PaymentInformation2CustomerInDBBase):
    pass
