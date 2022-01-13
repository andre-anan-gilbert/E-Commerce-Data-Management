import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import styled from "styled-components";

const Navbar = () => {
  return (
    <Nav>
      <IconButton size="large" aria-label="menu" sx={{ mr: 1 }}>
        <MenuIcon />
      </IconButton>
      Navbar
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  width: 100%;
  min-height: 5.6rem;
  padding: 0 1.2rem;

  display: flex;
  align-items: center;
`;
