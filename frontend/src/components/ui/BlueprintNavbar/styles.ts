import styled from 'styled-components';
import * as Breakpoints from '@styles/breakpoints';

export const NavWrapper = styled.div`
  @media (max-width: ${Breakpoints.MD}) {
    display: none;
  }
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;

  a {
    padding-left: 20px;
  }
`;

export const ButtonWrapper = styled.div`
  @media (min-width: ${Breakpoints.MD}) {
    display: none;
  }
`;

export const MenuWrapper = styled.div`
  position: absolute;
  top: 45px;
  right: 15px;
`;
