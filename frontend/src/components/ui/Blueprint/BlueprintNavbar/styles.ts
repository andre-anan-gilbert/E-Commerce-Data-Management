import styled from 'styled-components';
import * as Breakpoints from '@styles/breakpoints';

export const NavWrapper = styled.div`
  @media (max-width: ${Breakpoints.MD}) {
    display: none;
  }
`;
