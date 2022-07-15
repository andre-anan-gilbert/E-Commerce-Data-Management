"""Product CRUD object."""
from app.crud.base import CRUDBase
from app.models.product import Product
from app.schemas.product import ProductCreate, ProductUpdate


class CRUDProduct(CRUDBase[Product, ProductCreate, ProductUpdate]):
    """CRUD product class with methods to get, create, update, and delete."""
    pass


product = CRUDProduct(Product)
