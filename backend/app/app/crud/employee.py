"""Employee CRUD object."""
from app.crud.base import CRUDBase
from app.models.employee import Employee
from app.schemas.employee import EmployeeCreate, EmployeeUpdate


class CRUDEmployee(CRUDBase[Employee, EmployeeCreate, EmployeeUpdate]):
    """CRUD employee class with methods to get, create, update, and delete."""

    pass


employee = CRUDEmployee(Employee)
