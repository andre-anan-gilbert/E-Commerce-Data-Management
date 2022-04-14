"""Import all the models, so that Base has them before being imported by Alembic (Base.metadata)."""

# pylint: skip-file
from app.database.session import Base
from app.models.address_2_customer import Address2Customer
from app.models.address import Address
from app.models.category import Category
from app.models.department import Department
from app.models.employee import Employee
from app.models.invoice import Invoice
from app.models.order_detail import OrderDetail
from app.models.order import Order
from app.models.payment_information import PaymentInformation
from app.models.payment_information_2_customer import PaymentInformation2Customer
from app.models.postal_code_2_city import PostalCode2City
from app.models.product_2_warehouse import Product2Warehouse
from app.models.product import Product
from app.models.shipping_service import ShippingService
from app.models.supplier import Supplier
from app.models.warehouse import Warehouse
