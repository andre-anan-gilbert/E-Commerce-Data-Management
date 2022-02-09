import * as React from "react";
import {
  Navbar,
  NavbarGroup,
  NavbarHeading,
  NavbarDivider,
  Button,
  Classes,
} from "@blueprintjs/core";

const BlueprintNavbar = () => {
  return (
    <Navbar>
      <NavbarGroup align="left">
        <NavbarHeading>Blueprint</NavbarHeading>
        <NavbarDivider />
        <Button className={Classes.MINIMAL} icon="home" text="Home" />
        <Button className={Classes.MINIMAL} icon="document" text="Files" />
      </NavbarGroup>
    </Navbar>
  );
};

export default BlueprintNavbar;
