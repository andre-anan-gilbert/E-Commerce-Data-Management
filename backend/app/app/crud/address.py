"""Address CRUD object."""
from app.crud.base import CRUDBase
from app.models.address import Address
from app.schemas.address import AddressCreate, AddressUpdate


class CRUDAddress(CRUDBase[Address, AddressCreate, AddressUpdate]):
    """CRUD address class with methods to get, create, update, and delete."""
    pass


address = CRUDAddress(Address)
