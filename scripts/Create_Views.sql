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
shipping service with their products and invoices */
CREATE MATERIALIZED VIEW IF NOT EXISTS
    longfoots_orders_with_invoices
AS
    SELECT
        ord.status AS order_status,
        ord.order_date,
        inv.status AS invoice_status,
        inv.issue_date,
        inv.due_date,
        pro.name AS product,
        o2p.number_of_items,
        o2p.price_at_time_of_purchase,
        pro.price AS current_price,
        pro.description,
        cat.name AS category
    FROM
        (
            SELECT
                *
            FROM
                "order"
            WHERE
                shipping_service_id = '2'
        )
    AS
        ord
    INNER JOIN
        invoice inv
    ON
        ord.id = inv.order_id
    INNER JOIN
        order_2_product o2p
    ON
        ord.id = o2p.order_id
    INNER JOIN
        product pro
    ON
        o2p.product_id = pro.id
    INNER JOIN
        category cat
    ON
        pro.category_id = cat.id




/* this refreshes the materialized view, since it by default only
contains the data that satisfied the query by the time the command
was issues (later added data is not automatically included) */
REFRESH MATERIALIZED VIEW
    longfoots_orders_with_invoices;
