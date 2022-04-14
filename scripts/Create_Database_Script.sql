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

CREATE TABLE "product" (
  "item_number" int PRIMARY KEY,
  "name" varchar,
  "price" decimal,
  "category_id" int,
  "supplier_id" int
);

CREATE TABLE "category" (
  "_id" int PRIMARY KEY,
  "name" varchar,
  "description" varchar
);

CREATE TABLE "supplier" (
  "_id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "phone_number" varchar,
  "email" varchar
);

CREATE TABLE "address" (
  "_id" int PRIMARY KEY,
  "county" varchar,
  "region" varchar,
  "postal_code" varchar,
  "street" varchar,
  "house_number" int
);

CREATE TABLE "order" (
  "_id" int PRIMARY KEY,
  "customer_number" int,
  "invoice_id" int UNIQUE,
  "status" order_status,
  "address_id" int,
  "employee_id" int,
  "shipping_service_id" int
);

CREATE TABLE "order_detail" (
  "order_id" int,
  "product_item_number" int,
  "price_at_time_of_purchase" decimal,
  "number_of_items" int,
  PRIMARY KEY ("order_id", "product_item_number")
);

CREATE TABLE "customer" (
  "customer_number" int PRIMARY KEY,
  "salutation" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "payment_information" (
  "_id" int PRIMARY KEY,
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

CREATE TABLE "employee" (
  "employee_number" int PRIMARY KEY,
  "ssn" varchar UNIQUE,
  "salutation" varchar,
  "first_name" varchar,
  "last_name" varchar,
  "job_title" varchar,
  "department_id" int,
  "warehouse_id" int,
  "address_id" int,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "department" (
  "_id" int PRIMARY KEY,
  "name" varchar,
  "manager" int
);

CREATE TABLE "shipping_service" (
  "_id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "email" varchar,
  "phone_number" varchar
);

CREATE TABLE "postal_code_2_city" (
  "postal_code" varchar PRIMARY KEY,
  "city" varchar
);

CREATE TABLE "invoice" (
  "_id" int PRIMARY KEY,
  "status" invoice_status,
  "issue_date" date,
  "due_date" date,
  "payment_information_id" int
);

CREATE TABLE "warehouse" (
  "_id" int PRIMARY KEY,
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

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("_id");

ALTER TABLE "product" ADD FOREIGN KEY ("supplier_id") REFERENCES "supplier" ("_id");

ALTER TABLE "supplier" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("_id");

ALTER TABLE "address" ADD FOREIGN KEY ("postal_code") REFERENCES "postal_code_2_city" ("postal_code");

ALTER TABLE "order" ADD FOREIGN KEY ("customer_number") REFERENCES "customer" ("customer_number");

ALTER TABLE "order" ADD FOREIGN KEY ("invoice_id") REFERENCES "invoice" ("_id");

ALTER TABLE "order" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("_id");

ALTER TABLE "order" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("employee_number");

ALTER TABLE "order" ADD FOREIGN KEY ("shipping_service_id") REFERENCES "shipping_service" ("_id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("_id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("product_item_number") REFERENCES "product" ("item_number");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("customer_number") REFERENCES "customer" ("customer_number");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("_id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("customer_number") REFERENCES "customer" ("customer_number");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("_id");

ALTER TABLE "employee" ADD FOREIGN KEY ("department_id") REFERENCES "department" ("_id");

ALTER TABLE "employee" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("_id");

ALTER TABLE "employee" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("_id");

ALTER TABLE "department" ADD FOREIGN KEY ("manager") REFERENCES "employee" ("employee_number");

ALTER TABLE "shipping_service" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("_id");

ALTER TABLE "invoice" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("_id");

ALTER TABLE "warehouse" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("_id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("product_item_number") REFERENCES "product" ("item_number");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("_id");

