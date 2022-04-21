/** The navbar of the data management application. */
import {
  Alignment,
  Navbar,
  NavbarGroup,
  NavbarHeading,
  Classes,
} from '@blueprintjs/core';
import { BlueprintMobileNavbar } from '../BlueprintMobileNavbar/BlueprintMobileNavbar';

export const BlueprintNavbar = () => {
  return (
    <Navbar className={Classes.DARK}>
      <NavbarGroup>
        <NavbarHeading>404</NavbarHeading>
      </NavbarGroup>
      <NavbarGroup align={Alignment.RIGHT}>
        <BlueprintMobileNavbar />
      </NavbarGroup>
    </Navbar>
  );
};
