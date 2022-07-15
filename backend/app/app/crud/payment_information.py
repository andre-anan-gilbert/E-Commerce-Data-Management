"""Payment Information CRUD object."""
from app.crud.base import CRUDBase
from app.models.payment_information import PaymentInformation
from app.schemas.payment_information import PaymentInformationCreate, PaymentInformationUpdate


class CRUDPaymentInformation(CRUDBase[PaymentInformation, PaymentInformationCreate, PaymentInformationUpdate]):
    """CRUD payment information class with methods to get, create, update, and delete."""
    pass


payment_information = CRUDPaymentInformation(PaymentInformation)
