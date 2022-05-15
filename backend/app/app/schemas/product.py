from typing import Optional

from pydantic import BaseModel


class ProductBase(BaseModel):
    # implemented when API functionalities are implemented
    pass


class ProductCreate(ProductBase):
    # implemented when API functionalities are implemented
    pass


class ProductUpdate(ProductBase):
    pass


class ProductInDBBase(ProductBase):
    # attributes added when API functionalities are implemented
    class Config:
        orm_mode = True


class Product(ProductInDBBase):
    pass


class ProductInDB(ProductInDBBase):
    pass
