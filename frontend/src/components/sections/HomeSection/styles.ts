import styled from 'styled-components';
import { H1, H2, H3, Card as BlueprintCard } from '@blueprintjs/core';
import * as Breakpoints from '@styles/breakpoints';

export const Section = styled.div`
  width: min(100%, 120rem);
  margin-inline: auto;
`;

export const Title = styled(H1)`
  margin-bottom: 3rem;
`;

export const Subtitle = styled(H2)`
  margin-bottom: 3rem;

  &:last-of-type {
    margin-top: 3rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media (min-width: ${Breakpoints.MD}) {
    flex-direction: row;
  }
`;

export const Card = styled(BlueprintCard)`
  width: 24rem;
  height: 24rem;
`;

export const CardTitle = styled(H3)`
  margin-bottom: 2rem;
`;

export const CardNumberWrapper = styled.div`
  display: flex;
  align-items: center;
  height: calc(100% - 8rem);
`;

export const CardNumber = styled.p`
  font-size: 60px;
  margin-block: auto;
`;
