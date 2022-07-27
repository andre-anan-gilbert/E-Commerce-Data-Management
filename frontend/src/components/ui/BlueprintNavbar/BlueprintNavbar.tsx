/** The navbar of the data management application. */
import Link from 'next/link';
import { useState, useRef } from 'react';
import {
  Alignment,
  AnchorButton,
  Button,
  Drawer,
  Menu,
  MenuDivider,
  MenuItem,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Classes,
} from '@blueprintjs/core';
import { NavWrapper, Nav, ButtonWrapper, MenuWrapper } from './styles';
import { removeToken, useFetchUser } from '@queries/user';
import { useOnClickOutside } from '@hooks/use-on-click-outside';
import { useRouter } from 'next/router';

const UserMenu = ({ handleClose }: { handleClose: () => void }) => {
  const { data, error, isError, isLoading } = useFetchUser();
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, handleClose);

  const handleSignOut = () => {
    removeToken();
    router.push('/');
  };

  return (
    <MenuWrapper ref={ref}>
      <Menu className={Classes.ELEVATION_1}>
        <MenuDivider
          className={isLoading ? Classes.SKELETON : ''}
          title={isError ? error?.message : data?.email}
        />
        <MenuItem text="Sign out" onClick={handleSignOut} />
      </Menu>
    </MenuWrapper>
  );
};

const MobileNavbar = () => {
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

export const BlueprintNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <MobileNavbar />
      </NavbarGroup>
      {isOpen && <UserMenu handleClose={handleClose} />}
    </Navbar>
  );
};
