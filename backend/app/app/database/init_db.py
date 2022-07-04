"""Initializes the database with data."""
from datetime import datetime, timedelta
from sqlalchemy.orm import Session
from app import crud, schemas
from app.database import base  # pylint: disable=unused-import
from app.core.config import settings
from app.models.invoice import InvoiceStatus
from app.models.order import OrderStatus


def run(database: Session) -> None:
    """Fills the database with initial data."""

    is_initial_start = False

    # create initial users
    user = crud.user.get_by_email(database, email=settings.TEST_USER)
    if user is None:
        is_initial_start = True
        user_in = schemas.UserCreate(email=settings.TEST_USER, password=settings.TEST_USER_PASSWORD)
        user = crud.user.create(database, obj_in=user_in)

    if is_initial_start:

        # create initial categories

        category_data = [{
            'name': 'Armaments',
            'description': 'Weapons and Armor of all sorts',
        }, {
            'name': 'Food and Drink',
            'description': 'From basic food to the finest wine',
        }]

        categories = []

        for entry in category_data:
            categories.append(crud.category.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial cities

        # purely fictional test examples
        city_data = [{
            'postal_code': '01234',
            'name': 'Adua',
        }, {
            'postal_code': '12345',
            'name': 'Talins',
        }, {
            'postal_code': '23456',
            'name': 'Carleon',
        }]

        cities = []

        for entry in city_data:
            cities.append(crud.city.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial addresses

        address_data = [{
            'country': 'The Union',
            'region': 'Midderland',
            'postal_code': cities[0].postal_code,
            'street': 'The Royal Palace',
            'house_number': 1,
        }, {
            'country': 'The Union',
            'region': 'Midderland',
            'postal_code': cities[0].postal_code,
            'street': 'The House of Questions',
            'house_number': 1,
        }, {
            'country': 'The Union',
            'region': 'Midderland',
            'postal_code': cities[0].postal_code,
            'street': 'The House of the Maker',
            'house_number': 1,
        }, {
            'country': 'Styria',
            'region': 'City State of Talins',
            'postal_code': cities[1].postal_code,
            'street': 'Fontezarmo',
            'house_number': 1,
        }, {
            'country': 'The North',
            'region': 'Central Lands',
            'postal_code': cities[2].postal_code,
            'street': 'Skarling\'s Chair',
            'house_number': 1,
        }]

        addresses = []

        for entry in address_data:
            addresses.append(crud.address.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial suppliers

        supplier_data = [{
            'name': 'Kanadias, the Master Maker',
            'address_id': addresses[2].id,
            'phone_number': '+491711234567',
            'email': 'kanadias@master-maker.com',
        }, {
            'name': 'Morveer\'s Winery',
            'address_id': addresses[1].id,
            'phone_number': '+491511234567',
            'email': 'day@morveers.com',
        }]

        suppliers = []

        for entry in supplier_data:
            suppliers.append(crud.supplier.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial products

        product_data = [{
            'name': 'The Maker\'s Sword',
            'price': 349.99,
            'category_id': categories[0].id,
            'supplier_id': suppliers[0].id,
        }, {
            'name': 'The Divider',
            'price': 15000.00,
            'description': 'Two Edges: One here, one on The Other Side.',
            'category_id': categories[0].id,
            'supplier_id': suppliers[0].id,
        }, {
            'name': 'The Father of Swords',
            'price': 500.00,
            'category_id': categories[0].id,
            'supplier_id': suppliers[0].id,
        }, {
            'name': 'Red Wine',
            'price': 3.50,
            'category_id': categories[1].id,
            'supplier_id': suppliers[1].id,
        }]

        products = []

        for entry in product_data:
            products.append(crud.product.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial shipping services

        shipping_service_data = [{
            'name': 'Back to the Mud',
            'address_id': addresses[4].id,
            'phone_number': '+491721234567',
            'email': 'the-great-leveller@bttm.com',
        }, {
            'name': 'Longfoot\'s Remarkable Shipping',
            'address_id': addresses[1].id,
            'phone_number': '+491521234567',
            'email': 'brother.longfoot@manyremarkabletalents.com',
        }]

        shipping_services = []

        for entry in shipping_service_data:
            shipping_services.append(
                crud.shipping_service.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial payment information

        payment_information_data = [{
            'iban': 'UN1234567890',
            'bic': 'VAIL&BAL',
        }, {
            'iban': 'ST0987654321',
            'bic': 'VALI&BAL',
        }]

        payment_information_objects = []

        for entry in payment_information_data:
            payment_information_objects.append(
                crud.payment_information.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial warehouses

        warehouse_data = [{
            'address_id': addresses[2].id,
            'phone_number': '+491731234567',
            'email': 'yulwei@houseofthemaker.com',
        }, {
            'address_id': addresses[4].id,
            'phone_number': '+491531234567',
            'email': 'harding.grim@noreply.com',
        }]

        warehouses = []

        for entry in warehouse_data:
            warehouses.append(crud.warehouse.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial customers

        customer_data = [{
            'salutation': 'Mr.',
            'first_name': 'Logen',
            'last_name': 'Ninefingers',
            'email': 'thebloodynine@north.com',
        }, {
            'salutation': 'Miss',
            'first_name': 'Monzcarro',
            'last_name': 'Murcatto',
            'email': 'the-snake@talins.com',
        }, {
            'salutation': 'Mrs.',
            'first_name': 'Ardee',
            'last_name': 'dan Glokta',
            'email': 'ardee.west@umail.com',
            'phone_number': '+491719876543',
        }]

        customers = []

        for entry in customer_data:
            customers.append(crud.customer.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial customer address associations

        address_2_customer_data = [{
            'customer_id': customers[0].id,
            'address_id': addresses[4].id,
        }, {
            'customer_id': customers[0].id,
            'address_id': addresses[0].id,
        }, {
            'customer_id': customers[1].id,
            'address_id': addresses[3].id,
        }, {
            'customer_id': customers[2].id,
            'address_id': addresses[1].id,
        }]

        address_2_customer_objects = []

        for entry in address_2_customer_data:
            address_2_customer_objects.append(
                crud.address_2_customer.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial payment information customer associations

        payment_information_2_customer_data = [{
            'customer_id': customers[0].id,
            'payment_information_id': payment_information_objects[0].id,
            'is_default': True,
        }, {
            'customer_id': customers[1].id,
            'payment_information_id': payment_information_objects[0].id,
            'is_default': False,
        }, {
            'customer_id': customers[1].id,
            'payment_information_id': payment_information_objects[1].id,
            'is_default': True,
        }, {
            'customer_id': customers[2].id,
            'payment_information_id': payment_information_objects[0].id,
            'is_default': True,
        }]

        payment_information_2_customer_objects = []

        for entry in payment_information_2_customer_data:
            payment_information_2_customer_objects.append(
                crud.payment_information_2_customer.create_with_user_and_timestamp(database,
                                                                                   obj_in=entry,
                                                                                   edited_by=user.id))

        # create initial product warehouse associations

        product_2_warehouse_data = [{
            'product_id': products[0].id,
            'warehouse_id': warehouses[0].id,
            'number_in_stock': 5,
        }, {
            'product_id': products[1].id,
            'warehouse_id': warehouses[0].id,
            'number_in_stock': 1,
        }, {
            'product_id': products[2].id,
            'warehouse_id': warehouses[0].id,
            'number_in_stock': 0,
        }, {
            'product_id': products[3].id,
            'warehouse_id': warehouses[0].id,
            'number_in_stock': 50,
        }, {
            'product_id': products[0].id,
            'warehouse_id': warehouses[1].id,
            'number_in_stock': 1,
        }, {
            'product_id': products[1].id,
            'warehouse_id': warehouses[1].id,
            'number_in_stock': 0,
        }, {
            'product_id': products[2].id,
            'warehouse_id': warehouses[1].id,
            'number_in_stock': 3,
        }, {
            'product_id': products[3].id,
            'warehouse_id': warehouses[1].id,
            'number_in_stock': 15,
        }]

        product_2_warehouse_objects = []

        for entry in product_2_warehouse_data:
            product_2_warehouse_objects.append(
                crud.product_2_warehouse.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial departments

        department_data = [{
            'name': 'The Closed Council',
        }, {
            'name': 'The King\'s Inquisition',
        }]

        departments = []

        for entry in department_data:
            departments.append(crud.department.create_with_user_and_timestamp(database, obj_in=entry,
                                                                              edited_by=user.id))

        # create initial employees

        employee_data = [{
            'ssn': '1',
            'salutation': 'His August Majesty',
            'first_name': 'Jezal',
            'last_name': 'I.',
            'job_title': 'High King of the Union',
            'department_id': departments[0].id,
            'warehouse_id': warehouses[0].id,
            'address_id': addresses[0].id,
            'email': 'jezal-dan-luthar@union.com',
        }, {
            'ssn': '666',
            'salutation': 'Mr.',
            'first_name': 'Bayaz',
            'last_name': 'Balk',
            'job_title': 'First of the Magi',
            'department_id': departments[0].id,
            'warehouse_id': warehouses[1].id,
            'address_id': addresses[0].id,
            'email': 'bayaz@order-of-the-magi.com',
        }, {
            'ssn': '4',
            'salutation': 'His Excelency',
            'first_name': 'Sand',
            'last_name': 'dan Glokta',
            'job_title': 'Arch Lector of the Inquisition',
            'department_id': departments[1].id,
            'warehouse_id': warehouses[0].id,
            'address_id': addresses[1].id,
            'email': 'sand-dan-glokta@union.com',
        }]

        employees = []

        for entry in employee_data:
            employees.append(crud.employee.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # update departments so they have a manager

        department_manager_data = [{
            'manager_id': employees[1].id,
        }, {
            'manager_id': employees[2].id,
        }]

        new_departments = []

        for entry, department in zip(department_manager_data, departments):
            # unfortunately, this print-statement is absolutely necessary for the following update-statement to work
            print(f'Attempting to update department {department.name} with manager_id {entry["manager_id"]}')
            new_departments.append(
                crud.department.update_with_user_and_timestamp(database,
                                                               database_obj=department,
                                                               obj_in=entry,
                                                               edited_by=user.id))

        departments = new_departments

        # create initial orders

        order_data = [{
            'customer_id': customers[0].id,
            'status': OrderStatus.DELIVERED,
            'order_date': datetime.utcnow() - timedelta(days=7),
            'address_id': addresses[0].id,
            'employee_id': employees[1].id,
            'shipping_service_id': shipping_services[0].id,
        }, {
            'customer_id': customers[0].id,
            'status': OrderStatus.SENT,
            'order_date': datetime.utcnow() - timedelta(days=3),
            'address_id': addresses[4].id,
            'employee_id': employees[0].id,
            'shipping_service_id': shipping_services[1].id,
        }, {
            'customer_id': customers[2].id,
            'status': OrderStatus.DELIVERED,
            'order_date': datetime.utcnow() - timedelta(days=15),
            'address_id': addresses[1].id,
            'employee_id': employees[2].id,
            'shipping_service_id': shipping_services[1].id,
        }]

        orders = []

        for entry in order_data:
            orders.append(crud.order.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial invoices

        invoice_data = [{
            'issue_date': datetime.utcnow() - timedelta(days=23),
            'due_date': datetime.utcnow() + timedelta(days=7),
            'status': InvoiceStatus.PAID,
            'order_id': orders[0].id,
            'payment_information_id': payment_information_objects[0].id,
        }, {
            'issue_date': datetime.utcnow() - timedelta(days=3),
            'due_date': datetime.utcnow() + timedelta(days=27),
            'status': InvoiceStatus.OPEN,
            'order_id': orders[1].id,
            'payment_information_id': payment_information_objects[0].id,
        }, {
            'issue_date': datetime.utcnow() - timedelta(days=45),
            'due_date': datetime.utcnow() - timedelta(days=15),
            'status': InvoiceStatus.OVERDUE,
            'order_id': orders[2].id,
            'payment_information_id': payment_information_objects[0].id,
        }]

        invoices = []

        for entry in invoice_data:
            invoices.append(crud.invoice.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))

        # create initial order product associations

        order_2_product_data = [{
            'order_id': orders[0].id,
            'product_id': products[0].id,
            'price_at_time_of_purchase': 300.0,
            'number_of_items': 1,
        }, {
            'order_id': orders[1].id,
            'product_id': products[2].id,
            'price_at_time_of_purchase': 500.0,
            'number_of_items': 1,
        }, {
            'order_id': orders[1].id,
            'product_id': products[3].id,
            'price_at_time_of_purchase': 2.0,
            'number_of_items': 5,
        }, {
            'order_id': orders[2].id,
            'product_id': products[3].id,
            'price_at_time_of_purchase': 3.5,
            'number_of_items': 100,
        }]

        order_2_product_objects = []

        for entry in order_2_product_data:
            order_2_product_objects.append(
                crud.order_2_product.create_with_user_and_timestamp(database, obj_in=entry, edited_by=user.id))
