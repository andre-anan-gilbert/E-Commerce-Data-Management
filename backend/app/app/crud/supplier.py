"""Supplier CRUD object."""
from app.crud.base import CRUDBase
from app.models.supplier import Supplier
from app.schemas.supplier import SupplierCreate, SupplierUpdate


class CRUDSupplier(CRUDBase[Supplier, SupplierCreate, SupplierUpdate]):
    """CRUD supplier class with methods to get, create, update, and delete."""
    pass


supplier = CRUDSupplier(Supplier)
