"""PaymentInformation2Customer CRUD object."""
from app.crud.base import CRUDBase
from app.models.payment_information_2_customer import PaymentInformation2Customer
from app.schemas.payment_information_2_customer import PaymentInformation2CustomerCreate, PaymentInformation2CustomerUpdate


class CRUDPaymentInformation2Customer(CRUDBase[PaymentInformation2Customer, PaymentInformation2CustomerCreate,
                                               PaymentInformation2CustomerUpdate]):
    """CRUD payment_information_2_customer class with methods to get, create, update, and delete."""
    pass


payment_information_2_customer = CRUDPaymentInformation2Customer(PaymentInformation2Customer)
