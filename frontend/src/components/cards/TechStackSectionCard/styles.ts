import styled from 'styled-components';
import * as Breakpoints from '@styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${Breakpoints.MD}) {
    justify-content: flex-start;
  }
`;

export const Title = styled.b`
  font-size: 2rem;
  margin-left: 1rem;
  margin-block: 1rem;

  @media (min-width: ${Breakpoints.MD}) {
    margin-left: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 1.8rem;
  margin: 0;
`;
