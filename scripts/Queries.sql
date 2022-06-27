/* Returns customers that have not paid their orders on time
even though they are delivered */

SELECT
    cus.id,
    cus.salutation,
    cus.first_name,
    cus.last_name,
    ord.id AS order_id,
    ord.order_date,
    ord.status AS order_status,
    inv.issue_date,
    inv.due_date,
    inv.status AS invoice_status
FROM
    customer cus
INNER JOIN
    "order" ord
ON
    cus.id = ord.customer_id
INNER JOIN
    invoice inv
ON
    ord.id = inv.order_id
WHERE
    ord.status = 'DELIVERED'
AND
    inv.status = 'OVERDUE';


/* This query retrieves all email addresses with format firstname.lastname@something.com
in the database and associated phone numbers sorted alphabetic by email address. */

SELECT
    *
FROM
    (
        SELECT
            email,
            phone_number
        FROM
            customer
        UNION
        SELECT
            email,
            phone_number
        FROM
            employee
        UNION
        SELECT
            email,
            phone_number
        FROM
            shipping_service
        UNION
        SELECT
            email,
            phone_number
        FROM
            supplier
        UNION
        SELECT
            email,
            phone_number
        FROM
            warehouse
    )
AS
    sq
WHERE
    sq.email LIKE '_%._%@_%.com'
ORDER BY
    sq.email
ASC;


/* This query calculates the sum of all product-prices times the number ordered
(the total price) for each order. */

SELECT
    ord.id AS order_id,
    ord.status AS order_status,
    ord.order_date,
    SUM(o2p.price_at_time_of_purchase * o2p.number_of_items) AS total
FROM
    "order" ord
RIGHT JOIN
    order_2_product o2p
ON
    ord.id = o2p.order_id
GROUP BY
    ord.id,
    ord.status,
    ord.order_date; -- since the table is normalized the id would theoretically suffice


/* Returns all products that are in stock at warehouses located in "The Union" */

SELECT
    prd.name,
    prd.description,
    prd.price,
    p2w.number_in_stock,
    add.street,
    add.house_number,
    cit.name,
    add.postal_code,
    add.country,
    add.region
FROM
    product prd
INNER JOIN
    product_2_warehouse p2w
ON
    prd.id = p2w.product_id
AND
    p2w.number_in_stock > 0
INNER JOIN
    warehouse war
ON
    p2w.warehouse_id = war.id
INNER JOIN
    address add
ON
    war.address_id = add.id
AND
    add.country = 'The Union'
INNER JOIN
    city cit
ON
    add.postal_code = cit.postal_code;


/* Uses implicit joins to return all products that are in the category "Armaments" and have been
never been ordered */

SELECT
    prd.name,
    prd.description,
    prd.price
FROM
    product prd,
    category cat
WHERE
    prd.category_id = cat.id
AND
    cat.name = 'Armaments'
EXCEPT
SELECT
    prd.name,
    prd.description,
    prd.price
FROM
    product prd,
    order_2_product o2p
WHERE
    prd.id = o2p.product_id;


/* Implicit join that returns all employees with their departments, name of department manager
 and number of orders they are in charge of. */

SELECT
    emp.salutation,
    emp.first_name,
    emp.last_name,
    emp.email,
    emp.job_title,
    dep.name AS department_name,
    COUNT(ord.id) AS number_of_managed_orders,
    man.manager_salutation,
    man.manager_first_name,
    man.manager_last_name
FROM
    employee emp,
    department dep,
    (
        SELECT
            id,
            salutation AS manager_salutation,
            first_name AS manager_first_name,
            last_name AS manager_last_name
        FROM
            employee
    ) AS man,
    "order" ord
WHERE
    emp.department_id = dep.id
AND
    dep.manager_id = man.id
AND
    emp.id = ord.employee_id
GROUP BY
    emp.salutation,
    emp.first_name,
    emp.last_name,
    emp.email,
    emp.job_title,
    dep.name,
    man.manager_salutation,
    man.manager_first_name,
    man.manager_last_name;


/* This query returns all categories with their most expensive product */

SELECT
    category_name,
    product_name,
    price
FROM
    (
        SELECT
            cat.name as category_name,
            prd.name as product_name,
            prd.price,
            ROW_NUMBER() OVER (
                PARTITION BY
                    cat.name
                ORDER BY
                    prd.price
                DESC
            ) AS row_num
        FROM
            category cat
        INNER JOIN
            product prd
        ON
            cat.id = prd.category_id
    )
AS
    sq
WHERE
    row_num = 1;
