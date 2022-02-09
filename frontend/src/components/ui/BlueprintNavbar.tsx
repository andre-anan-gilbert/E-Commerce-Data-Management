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
      <NavbarGroup>
        <NavbarHeading>Blueprint Components</NavbarHeading>
        <input className="pt-input" placeholder="Search files..." type="text" />
      </NavbarGroup>
      <NavbarGroup align="right">
        <Button className={Classes.MINIMAL} icon="home">
          Home
        </Button>
        <Button className={Classes.MINIMAL} icon="document" text="Files" />
        <NavbarDivider />
        <Button className={Classes.MINIMAL} icon="user" />
        <Button className={Classes.MINIMAL} icon="notifications" />
        <Button className={Classes.MINIMAL} icon="cog" />
      </NavbarGroup>
    </Navbar>
  );
};

export default BlueprintNavbar;
