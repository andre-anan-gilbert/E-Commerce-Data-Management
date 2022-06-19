"""Customer CRUD object."""
from app.crud.base import CRUDBase
from app.models.customer import Customer
from app.schemas.customer import CustomerCreate, CustomerUpdate


class CRUDCustomer(CRUDBase[Customer, CustomerCreate, CustomerUpdate]):
    """CRUD customer class with methods to get, create, update, and delete."""

    pass


customer = CRUDCustomer(Customer)
