CREATE TYPE "order_status" AS ENUM (
  'open',
  'sent',
  'delivered'
);

CREATE TYPE "invoice_status" AS ENUM (
  'open',
  'overdue',
  'paid'
);

CREATE TABLE "products" (
  "item_number" int PRIMARY KEY,
  "name" varchar,
  "price" decimal,
  "category_id" int,
  "supplier_id" int
);

CREATE TABLE "categories" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "suppliers" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "phone_number" varchar,
  "email" varchar
);

CREATE TABLE "addresses" (
  "id" int PRIMARY KEY,
  "county" varchar,
  "region" varchar,
  "postal_code" varchar,
  "street" varchar,
  "house_number" int
);

CREATE TABLE "orders" (
  "id" int PRIMARY KEY,
  "customer_number" int,
  "invoice_id" int UNIQUE,
  "status" order_status,
  "address_id" int,
  "employee_id" int,
  "shipping_service_id" int
);

CREATE TABLE "order_details" (
  "order_id" int,
  "product_item_number" int,
  "price_at_time_of_purchase" decimal,
  "number_of_items" int,
  PRIMARY KEY ("order_id", "product_item_number")
);

CREATE TABLE "customers" (
  "customer_number" int PRIMARY KEY,
  "salutation" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "payment_information" (
  "id" int PRIMARY KEY,
  "iban" varchar UNIQUE,
  "bic" varchar
);

CREATE TABLE "payment_information_2_customer" (
  "customer_number" int,
  "payment_information_id" int,
  "is_default" boolean,
  PRIMARY KEY ("customer_number", "payment_information_id")
);

CREATE TABLE "address_2_customer" (
  "customer_number" int,
  "address_id" int,
  PRIMARY KEY ("customer_number", "address_id")
);

CREATE TABLE "employees" (
  "employee_number" int PRIMARY KEY,
  "ssn" varchar UNIQUE,
  "salutation" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "job_title" varchar,
  "department_id" int,
  "warehouses_id" int,
  "address_id" int,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "departments" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "manager" int
);

CREATE TABLE "shipping_services" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "postal_code_2_city" (
  "postal_code" varchar PRIMARY KEY,
  "city" varchar
);

CREATE TABLE "invoices" (
  "id" int PRIMARY KEY,
  "status" invoice_status,
  "issue_date" date,
  "due_date" date,
  "payment_information_id" int
);

CREATE TABLE "warehouses" (
  "id" int PRIMARY KEY,
  "address_id" int,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "product_2_warehouse" (
  "product_item_number" int,
  "warehouse_id" int,
  "number_in_stock" int,
  PRIMARY KEY ("product_item_number", "warehouse_id")
);

ALTER TABLE "products" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "products" ADD FOREIGN KEY ("supplier_id") REFERENCES "suppliers" ("id");

ALTER TABLE "suppliers" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "addresses" ADD FOREIGN KEY ("postal_code") REFERENCES "postal_code_2_city" ("postal_code");

ALTER TABLE "orders" ADD FOREIGN KEY ("customer_number") REFERENCES "customers" ("customer_number");

ALTER TABLE "orders" ADD FOREIGN KEY ("invoice_id") REFERENCES "invoices" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "orders" ADD FOREIGN KEY ("employee_id") REFERENCES "employees" ("employee_number");

ALTER TABLE "orders" ADD FOREIGN KEY ("shipping_service_id") REFERENCES "shipping_services" ("id");

ALTER TABLE "order_details" ADD FOREIGN KEY ("order_id") REFERENCES "orders" ("id");

ALTER TABLE "order_details" ADD FOREIGN KEY ("product_item_number") REFERENCES "products" ("item_number");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("customer_number") REFERENCES "customers" ("customer_number");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("customer_number") REFERENCES "customers" ("customer_number");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "employees" ADD FOREIGN KEY ("department_id") REFERENCES "departments" ("id");

ALTER TABLE "employees" ADD FOREIGN KEY ("warehouses_id") REFERENCES "warehouses" ("id");

ALTER TABLE "employees" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "departments" ADD FOREIGN KEY ("manager") REFERENCES "employees" ("employee_number");

ALTER TABLE "shipping_services" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "invoices" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("id");

ALTER TABLE "warehouses" ADD FOREIGN KEY ("address_id") REFERENCES "addresses" ("id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("product_item_number") REFERENCES "products" ("item_number");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouses" ("id");

