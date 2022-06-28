"""Invoice CRUD object."""
from app.crud.base import CRUDBase
from app.models.invoice import Invoice
from app.schemas.invoice import InvoiceCreate, InvoiceUpdate


class CRUDInvoice(CRUDBase[Invoice, InvoiceCreate, InvoiceUpdate]):
    """CRUD invoice class with methods to get, create, update, and delete."""

    pass


invoice = CRUDInvoice(Invoice)
