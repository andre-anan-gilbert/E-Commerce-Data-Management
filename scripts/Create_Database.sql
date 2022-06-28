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
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "address_2_customer" (
  "customer_id" int,
  "address_id" int,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int,
  PRIMARY KEY ("customer_id", "address_id")
);

CREATE TABLE "category" (
  "id" int PRIMARY KEY,
  "name" varchar UNIQUE NOT NULL,
  "description" varchar,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "city" (
  "postal_code" varchar PRIMARY KEY,
  "name" varchar NOT NULL,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "customer" (
  "id" int PRIMARY KEY,
  "salutation" varchar,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "department" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "manager_id" int,
  "created" timestamp NOT NULL,
  "updated" timestamp,
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
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "invoice" (
  "id" int PRIMARY KEY,
  "status" invoice_status NOT NULL,
  "issue_date" date NOT NULL,
  "due_date" date NOT NULL,
  "order_id" int UNIQUE,
  "payment_information_id" int,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "order" (
  "id" int PRIMARY KEY,
  "customer_id" int,
  "status" order_status NOT NULL,
  "order_date" date NOT NULL,
  "address_id" int,
  "employee_id" int,
  "shipping_service_id" int,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "order_2_product" (
  "order_id" int,
  "product_id" int,
  "price_at_time_of_purchase" decimal NOT NULL,
  "number_of_items" int NOT NULL,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int,
  PRIMARY KEY ("order_id", "product_id")
);

CREATE TABLE "payment_information" (
  "id" int PRIMARY KEY,
  "iban" varchar UNIQUE NOT NULL,
  "bic" varchar,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "payment_information_2_customer" (
  "customer_id" int,
  "payment_information_id" int,
  "is_default" boolean NOT NULL,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int,
  PRIMARY KEY ("customer_id", "payment_information_id")
);

CREATE TABLE "product" (
  "id" int PRIMARY KEY,
  "name" varchar NOT NULL,
  "price" decimal NOT NULL,
  "description" varchar,
  "category_id" int,
  "supplier_id" int,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "product_2_warehouse" (
  "product_id" int,
  "warehouse_id" int,
  "number_in_stock" int NOT NULL,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int,
  PRIMARY KEY ("product_id", "warehouse_id")
);

CREATE TABLE "shipping_service" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "supplier" (
  "id" int PRIMARY KEY,
  "name" varchar,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE TABLE "user" (
  "id" int PRIMARY KEY,
  "email" varchar UNIQUE NOT NULL,
  "hashed_password" varchar NOT NULL,
  "token_version" int NOT NULL,
  "created" timestamp NOT NULL,
  "updated" timestamp
);

CREATE TABLE "warehouse" (
  "id" int PRIMARY KEY,
  "address_id" int,
  "email" varchar UNIQUE NOT NULL,
  "phone_number" varchar UNIQUE,
  "created" timestamp NOT NULL,
  "updated" timestamp,
  "edited_by" int
);

CREATE INDEX "ix_address_country" ON "address" ("country");

CREATE INDEX "ix_address_edited_by" ON "address" ("edited_by");

CREATE INDEX "ix_address_house_number" ON "address" ("house_number");

CREATE INDEX "ix_address_id" ON "address" ("id");

CREATE INDEX "ix_address_postal_code" ON "address" ("postal_code");

CREATE INDEX "ix_address_region" ON "address" ("region");

CREATE INDEX "ix_address_street" ON "address" ("street");

CREATE INDEX "ix_address_2_customer_address_id" ON "address_2_customer" ("address_id");

CREATE INDEX "ix_address_2_customer_customer_id" ON "address_2_customer" ("customer_id");

CREATE INDEX "ix_address_2_customer_edited_by" ON "address_2_customer" ("edited_by");

CREATE INDEX "ix_category_description" ON "category" ("description");

CREATE INDEX "ix_category_edited_by" ON "category" ("edited_by");

CREATE INDEX "ix_category_id" ON "category" ("id");

CREATE INDEX "ix_category_name" ON "category" ("name");

CREATE UNIQUE INDEX "city_postal_code_uc" ON "city" ("postal_code", "name");

CREATE INDEX "ix_city_name" ON "city" ("name");

CREATE INDEX "ix_city_edited_by" ON "city" ("edited_by");

CREATE INDEX "ix_city_postal_code" ON "city" ("postal_code");

CREATE INDEX "ix_customer_edited_by" ON "customer" ("edited_by");

CREATE INDEX "ix_customer_email" ON "customer" ("email");

CREATE INDEX "ix_customer_first_name" ON "customer" ("first_name");

CREATE INDEX "ix_customer_id" ON "customer" ("id");

CREATE INDEX "ix_customer_last_name" ON "customer" ("last_name");

CREATE INDEX "ix_customer_phone_number" ON "customer" ("phone_number");

CREATE INDEX "ix_customer_salutation" ON "customer" ("salutation");

CREATE INDEX "ix_department_edited_by" ON "department" ("edited_by");

CREATE INDEX "ix_department_id" ON "department" ("id");

CREATE INDEX "ix_department_manager_id" ON "department" ("manager_id");

CREATE INDEX "ix_department_name" ON "department" ("name");

CREATE INDEX "ix_employee_address_id" ON "employee" ("address_id");

CREATE INDEX "ix_employee_department_id" ON "employee" ("department_id");

CREATE INDEX "ix_employee_edited_by" ON "employee" ("edited_by");

CREATE INDEX "ix_employee_email" ON "employee" ("email");

CREATE INDEX "ix_employee_first_name" ON "employee" ("first_name");

CREATE INDEX "ix_employee_id" ON "employee" ("id");

CREATE INDEX "ix_employee_job_title" ON "employee" ("job_title");

CREATE INDEX "ix_employee_last_name" ON "employee" ("last_name");

CREATE INDEX "ix_employee_phone_number" ON "employee" ("phone_number");

CREATE INDEX "ix_employee_salutation" ON "employee" ("salutation");

CREATE INDEX "ix_employee_ssn" ON "employee" ("ssn");

CREATE INDEX "ix_employee_warehouse_id" ON "employee" ("warehouse_id");

CREATE INDEX "ix_invoice_due_date" ON "invoice" ("due_date");

CREATE INDEX "ix_invoice_edited_by" ON "invoice" ("edited_by");

CREATE INDEX "ix_invoice_id" ON "invoice" ("id");

CREATE INDEX "ix_invoice_issue_date" ON "invoice" ("issue_date");

CREATE INDEX "ix_invoice_order_id" ON "invoice" ("order_id");

CREATE INDEX "ix_invoice_payment_information_id" ON "invoice" ("payment_information_id");

CREATE INDEX "ix_invoice_status" ON "invoice" ("status");

CREATE INDEX "ix_order_address_id" ON "order" ("address_id");

CREATE INDEX "ix_order_customer_id" ON "order" ("customer_id");

CREATE INDEX "ix_order_edited_by" ON "order" ("edited_by");

CREATE INDEX "ix_order_employee_id" ON "order" ("employee_id");

CREATE INDEX "ix_order_id" ON "order" ("id");

CREATE INDEX "ix_order_order_date" ON "order" ("order_date");

CREATE INDEX "ix_order_shipping_service_id" ON "order" ("shipping_service_id");

CREATE INDEX "ix_order_status" ON "order" ("status");

CREATE INDEX "ix_order_2_product_edited_by" ON "order_2_product" ("edited_by");

CREATE INDEX "ix_order_2_product_number_of_items" ON "order_2_product" ("number_of_items");

CREATE INDEX "ix_order_2_product_order_id" ON "order_2_product" ("order_id");

CREATE INDEX "ix_order_2_product_price_at_time_of_purchase" ON "order_2_product" ("price_at_time_of_purchase");

CREATE INDEX "ix_order_2_product_product_id" ON "order_2_product" ("product_id");

CREATE INDEX "ix_payment_information_bic" ON "payment_information" ("bic");

CREATE INDEX "ix_payment_information_edited_by" ON "payment_information" ("edited_by");

CREATE INDEX "ix_payment_information_iban" ON "payment_information" ("iban");

CREATE INDEX "ix_payment_information_id" ON "payment_information" ("id");

CREATE INDEX "ix_payment_information_2_customer_customer_id" ON "payment_information_2_customer" ("customer_id");

CREATE INDEX "ix_payment_information_2_customer_edited_by" ON "payment_information_2_customer" ("edited_by");

CREATE INDEX "ix_payment_information_2_customer_payment_information_id" ON "payment_information_2_customer" ("payment_information_id");

CREATE INDEX "ix_product_category_id" ON "product" ("category_id");

CREATE INDEX "ix_product_edited_by" ON "product" ("edited_by");

CREATE INDEX "ix_product_id" ON "product" ("id");

CREATE INDEX "ix_product_name" ON "product" ("name");

CREATE INDEX "ix_product_price" ON "product" ("price");

CREATE INDEX "ix_product_supplier_id" ON "product" ("supplier_id");

CREATE INDEX "ix_product_2_warehouse_edited_by" ON "product_2_warehouse" ("edited_by");

CREATE INDEX "ix_product_2_warehouse_number_in_stock" ON "product_2_warehouse" ("number_in_stock");

CREATE INDEX "ix_product_2_warehouse_product_id" ON "product_2_warehouse" ("product_id");

CREATE INDEX "ix_product_2_warehouse_warehouse_id" ON "product_2_warehouse" ("warehouse_id");

CREATE INDEX "ix_shipping_service_address_id" ON "shipping_service" ("address_id");

CREATE INDEX "ix_shipping_service_edited_by" ON "shipping_service" ("edited_by");

CREATE INDEX "ix_shipping_service_email" ON "shipping_service" ("email");

CREATE INDEX "ix_shipping_service_id" ON "shipping_service" ("id");

CREATE INDEX "ix_shipping_service_name" ON "shipping_service" ("name");

CREATE INDEX "ix_shipping_service_phone_number" ON "shipping_service" ("phone_number");

CREATE INDEX "ix_supplier_address_id" ON "supplier" ("address_id");

CREATE INDEX "ix_supplier_edited_by" ON "supplier" ("edited_by");

CREATE INDEX "ix_supplier_email" ON "supplier" ("email");

CREATE INDEX "ix_supplier_id" ON "supplier" ("id");

CREATE INDEX "ix_supplier_name" ON "supplier" ("name");

CREATE INDEX "ix_supplier_phone_number" ON "supplier" ("phone_number");

CREATE INDEX "ix_user_email" ON "user" ("email");

CREATE INDEX "ix_user_id" ON "user" ("id");

CREATE INDEX "ix_warehouse_address_id" ON "warehouse" ("address_id");

CREATE INDEX "ix_warehouse_edited_by" ON "warehouse" ("edited_by");

CREATE INDEX "ix_warehouse_email" ON "warehouse" ("email");

CREATE INDEX "ix_warehouse_id" ON "warehouse" ("id");

CREATE INDEX "ix_warehouse_phone_number" ON "warehouse" ("phone_number");

ALTER TABLE "address" ADD FOREIGN KEY ("postal_code") REFERENCES "city" ("postal_code");

ALTER TABLE "address" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "address_2_customer" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "category" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "city" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "customer" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "department" ADD FOREIGN KEY ("manager_id") REFERENCES "employee" ("id");

ALTER TABLE "department" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("department_id") REFERENCES "department" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "employee" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "invoice" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "invoice" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("id");

ALTER TABLE "invoice" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("employee_id") REFERENCES "employee" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("shipping_service_id") REFERENCES "shipping_service" ("id");

ALTER TABLE "order" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "order_2_product" ADD FOREIGN KEY ("order_id") REFERENCES "order" ("id");

ALTER TABLE "order_2_product" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "order_2_product" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "payment_information" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("customer_id") REFERENCES "customer" ("id");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("payment_information_id") REFERENCES "payment_information" ("id");

ALTER TABLE "payment_information_2_customer" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("supplier_id") REFERENCES "supplier" ("id");

ALTER TABLE "product" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("product_id") REFERENCES "product" ("id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("warehouse_id") REFERENCES "warehouse" ("id");

ALTER TABLE "product_2_warehouse" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "shipping_service" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "shipping_service" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "supplier" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "supplier" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");

ALTER TABLE "warehouse" ADD FOREIGN KEY ("address_id") REFERENCES "address" ("id");

ALTER TABLE "warehouse" ADD FOREIGN KEY ("edited_by") REFERENCES "user" ("id");
