/** The navbar of the data management application. */
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Alignment,
  AnchorButton,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Classes,
} from '@blueprintjs/core';
import { BlueprintMobileNavbar } from '../BlueprintMobileNavbar/BlueprintMobileNavbar';
import { getCurrentUser } from '@queries/user';

export const BlueprintNavbar = () => {
  const [user, setUser] = useState('');

  useEffect(() => {
    const getUser = async () => {
      const response = await getCurrentUser();
      setUser(response.data.email);
    };

    getUser();
  }, []);

  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup>
        <NavbarHeading>404</NavbarHeading>
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
      </NavbarGroup>
      {user}
      <NavbarGroup align={Alignment.RIGHT}>
        <BlueprintMobileNavbar />
      </NavbarGroup>
    </Navbar>
  );
};
