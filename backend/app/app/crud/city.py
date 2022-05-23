"""City CRUD object."""
from app.crud.base import CRUDBase
from app.models.city import City
from app.schemas.city import CityCreate, CityUpdate


class CRUDCity(CRUDBase[City, CityCreate, CityUpdate]):
    """CRUD city class with methods to get, create, update, and delete."""
    pass


city = CRUDCity(City)
