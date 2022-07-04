"""City properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class CityBase(BaseModel):
    postal_code: Optional[str]
    name: Optional[str]


# Properties to receive via API on creation
class CityCreate(CityBase):
    postal_code: str
    name: str


# Properties to receive via API on update
class CityUpdate(CityBase):
    pass


class CityInDBBase(CityBase):

    class Config:
        orm_mode = True


# Additional properties to return via API
class City(CityInDBBase):
    pass


# Additional properties stored in DB
class CityInDB(CityInDBBase):
    pass
