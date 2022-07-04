"""Shipping Service CRUD object."""
from app.crud.base import CRUDBase
from app.models.shipping_service import ShippingService
from app.schemas.shipping_service import ShippingServiceCreate, ShippingServiceUpdate


class CRUDShippingService(CRUDBase[ShippingService, ShippingServiceCreate, ShippingServiceUpdate]):
    """CRUD shipping service class with methods to get, create, update, and delete."""

    pass


shipping_service = CRUDShippingService(ShippingService)
