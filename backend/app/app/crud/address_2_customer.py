"""Address2Customer CRUD object."""
from app.crud.base import CRUDBase
from app.models.address_2_customer import Address2Customer
from app.schemas.address_2_customer import Address2CustomerCreate, Address2CustomerUpdate


class CRUDAddress2Customer(CRUDBase[Address2Customer, Address2CustomerCreate, Address2CustomerUpdate]):
    """CRUD address_2_customer class with methods to get, create, update, and delete."""
    pass


address_2_customer = CRUDAddress2Customer(Address2Customer)
