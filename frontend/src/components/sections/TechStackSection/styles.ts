import styled from 'styled-components';
import { H1 } from '@blueprintjs/core';
import * as Breakpoints from '@styles/breakpoints';

export const Section = styled.section`
  padding-bottom: 10rem;
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column-reverse;
  width: min(100%, 120rem);
  margin-inline: auto;

  @media (min-width: ${Breakpoints.MD}) {
    flex-direction: row;
    grid-gap: 5rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-inline: 0.8rem;

  @media (min-width: ${Breakpoints.MD}) {
    flex: 1 1 50%;
  }
`;

export const Title = styled(H1)`
  text-align: center;

  @media (min-width: ${Breakpoints.MD}) {
    text-align: left;
  }
`;

export const Subtitle = styled.p`
  text-align: center;
  max-width: 70rem;
  margin-inline: auto;

  @media (min-width: ${Breakpoints.MD}) {
    text-align: left;
  }
`;
