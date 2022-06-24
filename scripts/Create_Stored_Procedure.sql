/* This procedure is supposed to be triggered when someone sets a payment method of a specific
user as default payment method (is_default=true). It then sets all other payment information
objects of this user as not default (is_default=false).*/

CREATE FUNCTION
    ensure_only_one_default_payment_information_per_user()
RETURNS
    TRIGGER
AS
    $pay2cus_only_one_default_per_customer$
BEGIN
    UPDATE
        payment_information_2_customer
    SET
        is_default = false
    WHERE
        customer_id = NEW.customer_id
    AND
        payment_information_id != NEW.payment_information_id;
    RETURN
        NEW;
END
    $pay2cus_only_one_default_per_customer$
LANGUAGE
    plpgsql;


/* The following trigger executes the procedure after every update on
payment_information_2_customer.is_default */

CREATE TRIGGER
    pay2cus_only_one_default_per_customer
AFTER
    INSERT OR UPDATE
OF
    is_default
ON
    payment_information_2_customer
FOR EACH
    ROW
WHEN
    (NEW.is_default = true)
EXECUTE PROCEDURE
    ensure_only_one_default_payment_information_per_user(customer_id, payment_information_id);

/* this statement leads to triggering the trigger (on inital data) */

INSERT INTO
    payment_information_2_customer
VALUES
    (1, 2, true, NOW(), null, 1);
