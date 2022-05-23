"""Category properties."""
from typing import Optional

from pydantic import BaseModel


# Shared properties
class CategoryBase(BaseModel):
    name: Optional[str]
    decription: Optional[str]


# Properties to receive via API on creation
class CategoryCreate(CategoryBase):
    name: str


# Properties to receive via API on update
class CategoryUpdate(CategoryBase):
    pass


class CategoryInDBBase(CategoryBase):
    _id: int

    class Config:
        orm_mode = True


# Additional properties to return via API
class Category(CategoryInDBBase):
    pass


# Additional properties stored in DB
class CategoryInDB(CategoryInDBBase):
    pass
