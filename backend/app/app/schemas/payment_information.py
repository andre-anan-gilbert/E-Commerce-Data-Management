"""Payment Information properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class PaymentInformationBase(BaseModel):
    iban: Optional[str]
    bic: Optional[str]


# Properties to receive via API on creation
class PaymentInformationCreate(PaymentInformationBase):
    iban: str


# Properties to receive via API on update
class PaymentInformationUpdate(PaymentInformationBase):
    pass


class PaymentInformationInDBBase(PaymentInformationBase):
    id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class PaymentInformation(PaymentInformationInDBBase):
    pass


# Additional properties stored in DB
class PaymentInformationInDB(PaymentInformationInDBBase):
    pass
