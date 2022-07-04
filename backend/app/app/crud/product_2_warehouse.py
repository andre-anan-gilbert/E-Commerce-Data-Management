"""Product2Warehouse CRUD object."""
from app.crud.base import CRUDBase
from app.models.product_2_warehouse import Product2Warehouse
from app.schemas.product_2_warehouse import Product2WarehouseCreate, Product2WarehouseUpdate


class CRUDProduct2Warehouse(CRUDBase[Product2Warehouse, Product2WarehouseCreate, Product2WarehouseUpdate]):
    """CRUD product_2_warehouse class with methods to get, create, update, and delete."""

    pass


product_2_warehouse = CRUDProduct2Warehouse(Product2Warehouse)
