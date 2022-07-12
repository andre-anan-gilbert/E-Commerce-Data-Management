/** The mobile navbar of the data management application. */
import Link from 'next/link';
import { useState } from 'react';
import {
  Alignment,
  AnchorButton,
  Button,
  Drawer,
  Classes,
} from '@blueprintjs/core';
import { Nav, ButtonWrapper } from './styles';

export const BlueprintMobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <ButtonWrapper>
        <Button type="button" rightIcon="menu" minimal onClick={handleOpen} />
      </ButtonWrapper>
      <Drawer
        className={Classes.DARK}
        title="404"
        isOpen={isOpen}
        onClose={handleClose}
        size="320px"
      >
        <div className={Classes.DRAWER_BODY}>
          <Nav>
            <Link href="/home" passHref>
              <AnchorButton
                text="Home"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
            <Link href="/employees" passHref>
              <AnchorButton
                text="Employees"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
            <Link href="/warehouses" passHref>
              <AnchorButton
                text="Warehouses"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
            <Link href="/orders" passHref>
              <AnchorButton
                text="Orders"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
            <Link href="/customers" passHref>
              <AnchorButton
                text="Customers"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
            <Link href="/suppliers" passHref>
              <AnchorButton
                text="Suppliers"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
            <Link href="/products" passHref>
              <AnchorButton
                text="Products"
                alignText={Alignment.LEFT}
                minimal
                onClick={handleClose}
              />
            </Link>
          </Nav>
        </div>
      </Drawer>
    </>
  );
};
