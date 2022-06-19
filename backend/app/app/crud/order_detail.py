"""Order Detail CRUD object."""
from app.crud.base import CRUDBase
from app.models.order_detail import OrderDetail
from app.schemas.order_detail import OrderDetailCreate, OrderDetailUpdate


class CRUDOrderDetail(CRUDBase[OrderDetail, OrderDetailCreate, OrderDetailUpdate]):
    """CRUD order detail class with methods to get, create, update, and delete."""

    pass


order_detail = CRUDOrderDetail(OrderDetail)
