"""Category CRUD object."""
from app.crud.base import CRUDBase
from app.models.category import Category
from app.schemas.category import CategoryCreate, CategoryUpdate


class CRUDCategory(CRUDBase[Category, CategoryCreate, CategoryUpdate]):
    """CRUD category class with methods to get, create, update, and delete."""
    pass


category = CRUDCategory(Category)
