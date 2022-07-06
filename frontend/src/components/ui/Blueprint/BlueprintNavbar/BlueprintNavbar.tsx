/** The navbar of the data management application. */
import { useEffect, useState } from 'react';
import {
  Alignment,
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
      </NavbarGroup>
      {user}
      <NavbarGroup align={Alignment.RIGHT}>
        <BlueprintMobileNavbar />
      </NavbarGroup>
    </Navbar>
  );
};
