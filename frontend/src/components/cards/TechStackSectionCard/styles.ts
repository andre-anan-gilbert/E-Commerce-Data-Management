import styled from 'styled-components';
import { TABLET } from '@styles/breakpoints';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${TABLET}) {
    justify-content: flex-start;
  }
`;

export const Title = styled.b`
  font-size: 16px;
  margin-left: 1rem;
  margin-bottom: 0;

  @media (min-width: ${TABLET}) {
    margin-left: 2rem;
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin: 0;
`;
