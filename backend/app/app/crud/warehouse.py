"""Warehouse CRUD object."""
from app.crud.base import CRUDBase
from app.models.warehouse import Warehouse
from app.schemas.warehouse import WarehouseCreate, WarehouseUpdate


class CRUDWarehouse(CRUDBase[Warehouse, WarehouseCreate, WarehouseUpdate]):
    """CRUD warehouse class with methods to get, create, update, and delete."""

    pass


warehouse = CRUDWarehouse(Warehouse)
