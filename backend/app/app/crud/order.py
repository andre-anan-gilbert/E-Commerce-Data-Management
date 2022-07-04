"""Order CRUD object."""
from app.crud.base import CRUDBase
from app.models.order import Order
from app.schemas.order import OrderCreate, OrderUpdate


class CRUDOrder(CRUDBase[Order, OrderCreate, OrderUpdate]):
    """CRUD order class with methods to get, create, update, and delete."""

    pass


order = CRUDOrder(Order)
