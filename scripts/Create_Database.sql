CREATE TYPE "invoice_status" AS ENUM (
  'open',
  'overdue',
  'paid'
);

CREATE TYPE "order_status" AS ENUM (
  'open',
  'sent',
  'delivered'
);

CREATE TABLE "address" (
  "id" int PRIMARY KEY,
  "country" varchar NOT NULL,
  "region" varchar,
  "postal_code" varchar,
  "street" varchar NOT NULL,
  "house_number" int NOT NULL,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "address_2_customer" (
  "customer_id" int,
  "address_id" int,
  PRIMARY KEY ("customer_id", "address_id")
);

CREATE TABLE "category" (
  "id" int PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL,
  "description" varchar,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "city" (
  "postal_code" varchar PRIMARY KEY,
  "city" varchar NOT NULL,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "customer" (
  "id" int PRIMARY KEY,
  "salutation" varchar,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "department" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "manager_id" int,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "employee" (
  "id" int PRIMARY KEY,
  "ssn" varchar UNIQUE,
  "salutation" varchar,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "job_title" varchar NOT NULL,
  "department_id" int,
  "warehouse_id" int,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "invoice" (
  "id" int PRIMARY KEY,
  "status" invoice_status NOT NULL,
  "issue_date" date NOT NULL,
  "due_date" date NOT NULL,
  "payment_information_id" int,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "order" (
  "id" int PRIMARY KEY,
  "customer_id" int,
  "invoice_id" int UNIQUE,
  "status" order_status NOT NULL,
  "address_id" int,
  "employee_id" int,
  "shipping_service_id" int,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "order_detail" (
  "order_id" int,
  "product_item_number" int,
  "price_at_time_of_purchase" decimal NOT NULL,
  "number_of_items" int NOT NULL,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int,
  PRIMARY KEY ("order_id", "product_item_number")
);

CREATE TABLE "payment_information" (
  "id" int PRIMARY KEY,
  "iban" varchar UNIQUE NOT NULL,
  "bic" varchar,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "payment_information_2_customer" (
  "customer_number" int,
  "payment_information_id" int,
  "is_default" boolean NOT NULL,
  PRIMARY KEY ("customer_number", "payment_information_id")
);

CREATE TABLE "product" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "price" decimal NOT NULL,
  "description" varchar,
  "category_id" int,
  "supplier_id" int,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "product_2_warehouse" (
  "product_id" int,
  "warehouse_id" int,
  "number_in_stock" int NOT NULL,
  PRIMARY KEY ("product_id", "warehouse_id")
);

CREATE TABLE "shipping_service" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "supplier" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE TABLE "user" (
  "id" int PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "hashed_password" varchar NOT NULL,
  "token_version" int NOT NULL,
  "created" datetime NOT NULL,
  "updated" datetime
);

CREATE TABLE "warehouse" (
  "id" int PRIMARY KEY,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" datetime NOT NULL,
  "updated" datetime,
  "edited_by" int
);

CREATE UNIQUE INDEX ON "city" ("postal_code", "city");

ALTER TABLE "address" ADD FOREIGN KEY ("postal_code") REFERENCES "city" ("postal_code");

ALTER TABLE "address" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "category" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "city" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "customer" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "department" ADD FOREIGN KEY ("manager_id") REFERENCES "employee" ("id");

ALTER TABLE "department" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("department_id") REFERENCES "department" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "invoice" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("id");

ALTER TABLE "invoice" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("invoice_id") REFERENCES "invoice" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("shipping_service_id") REFERENCES "shipping_service" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("product_item_number") REFERENCES "product" ("id");

ALTER TABLE "order_detail" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "payment_information" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("customer_number") REFERENCES "customer" ("id");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("supplier_id") REFERENCES "supplier" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("id");

ALTER TABLE "shipping_service" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "shipping_service" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "supplier" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "supplier" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "warehouse" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "warehouse" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");
