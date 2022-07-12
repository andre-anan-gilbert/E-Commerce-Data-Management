/** The navbar of the data management application. */
import Link from 'next/link';
import { useState, useEffect } from 'react';
import {
  Alignment,
  AnchorButton,
  Button,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Classes,
} from '@blueprintjs/core';
import { BlueprintMobileNavbar } from '../BlueprintMobileNavbar/BlueprintMobileNavbar';
import { BlueprintMenu } from '../BlueprintMenu/BlueprintMenu';
import { NavWrapper } from './styles';
import { fetchUser } from '@queries/user';

export const BlueprintNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState('');

  useEffect(() => {
    const getMe = async () => {
      const response = await fetchUser();
      setUser(response.email);
    };

    getMe();
  }, []);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup>
        <NavbarHeading>404</NavbarHeading>
        <NavWrapper>
          <Link href="/home" passHref>
            <AnchorButton text="Home" minimal />
          </Link>
          <Link href="/employees" passHref>
            <AnchorButton text="Employees" minimal />
          </Link>
          <Link href="/warehouses" passHref>
            <AnchorButton text="Warehouses" minimal />
          </Link>
          <Link href="/orders" passHref>
            <AnchorButton text="Sales Order" minimal />
          </Link>
          <Link href="/customers" passHref>
            <AnchorButton text="Customers" minimal />
          </Link>
          <Link href="/suppliers" passHref>
            <AnchorButton text="Suppliers" minimal />
          </Link>
          <Link href="/products" passHref>
            <AnchorButton text="Products" minimal />
          </Link>
        </NavWrapper>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <Button icon="user" minimal onClick={handleOpen} />
        <BlueprintMobileNavbar />
      </NavbarGroup>
      {isOpen && <BlueprintMenu handleClose={handleClose} user={user} />}
    </Navbar>
  );
};
