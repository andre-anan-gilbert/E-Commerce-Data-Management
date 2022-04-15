import styled from 'styled-components';
import { H1 } from '@blueprintjs/core';

export const Section = styled.section`
  padding: 10rem 0.8rem;
`;

export const TextWrapper = styled.div`
  width: min(100%, 120rem);
  margin-inline: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  width: min(100%, 60rem);
  margin-inline: auto;
  margin-bottom: 5rem;
`;

export const Title = styled(H1)`
  text-align: center;
  margin: 0;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin: 0;
`;
