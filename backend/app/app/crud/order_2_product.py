"""Order Detail CRUD object."""
from app.crud.base import CRUDBase
from app.models.order_2_product import Order2Product
from app.schemas.order_2_product import Order2ProductCreate, Order2ProductUpdate


class CRUDOrder2Product(CRUDBase[Order2Product, Order2ProductCreate, Order2ProductUpdate]):
    """CRUD order detail class with methods to get, create, update, and delete."""

    pass


order_2_product = CRUDOrder2Product(Order2Product)
