"""Department CRUD object."""
from app.crud.base import CRUDBase
from app.models.department import Department
from app.schemas.department import DepartmentCreate, DepartmentUpdate


class CRUDDepartment(CRUDBase[Department, DepartmentCreate, DepartmentUpdate]):
    """CRUD department class with methods to get, create, update, and delete."""

    pass


department = CRUDDepartment(Department)
