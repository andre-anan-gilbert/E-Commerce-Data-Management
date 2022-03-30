"""Import all the models, so that Base has them before being imported by Alembic (Base.metadata)."""

# pylint: skip-file
from app.database.base_class import Base
from app.models.address_2_customer import Address2Customer
from app.models.addresses import Addresses
from app.models.categories import Categories
from app.models.departments import Departments
from app.models.employees import Employees
from app.models.invoices import Invoices
from app.models.order_details import OrderDetails
from app.models.orders import Orders
from app.models.payment_information import PaymentInformation
from app.models.payment_information_2_customer import PaymentInformation2Customer
from app.models.postal_code_2_city import PostalCode2City
from app.models.product_2_warehouse import Product2Warehouse
from app.models.products import Products
from app.models.shipping_services import ShippingServices
from app.models.suppliers import Suppliers
from app.models.warehouses import Warehouses
