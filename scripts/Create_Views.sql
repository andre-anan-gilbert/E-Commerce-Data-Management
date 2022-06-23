/* create simple view listing all customers with name and full address
in a way it would be needed for shipping*/
CREATE OR REPLACE VIEW
    customer_with_full_address
AS
    SELECT
        cus.salutation,
        cus.first_name,
        cus.last_name,
        add.street,
        add.house_number,
        cit.name,
        add.postal_code,
        add.country,
        add.region
    FROM
        customer cus
    INNER JOIN
        address_2_customer a2c
    ON
        cus.id = a2c.customer_id
    INNER JOIN
        address add
    ON
        a2c.address_id = add.id
    INNER JOIN
        city cit
    ON
        add.postal_code = cit.postal_code;

/* create materialized view listing all orders shipped by a specific
shipping service with their products */
CREATE MATERIALIZED VIEW IF NOT EXISTS
    orders_with_invoices
AS
    SELECT
        ord.
        inv.
    FROM
        order ord
    INNER JOIN




/* this refreshes the materialized view, since it by default only
contains the data that satisfied the query by the time the command
was issues (later added data is not automatically included) */
REFRESH MATERIALIZED VIEW
    orders_with_invoices;
