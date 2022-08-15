import styled from 'styled-components';
import { H4, H5, Card as BlueprintCard, Colors } from '@blueprintjs/core';
import * as Breakpoints from '@styles/breakpoints';

export const Section = styled.div`
  margin-inline: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 1rem;
  background-color: ${Colors.DARK_GRAY3};
`;

export const Title = styled(H5)`
  margin-bottom: 2rem;
`;

export const ApplicationWrapper = styled.div`
  width: min(100%, 121rem);
  padding: 5rem 1rem;
  margin-inline: auto;

  @media (min-width: ${Breakpoints.MD}) {
    padding: 5rem 1rem 50rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem 5rem;
`;

export const Card = styled(BlueprintCard)`
  flex: 1 1 80%;

  @media (min-width: ${Breakpoints.MD}) {
    flex: 1 1 30%;
  }
`;

export const CardContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const CardTitle = styled(H4)`
  margin-left: 2rem;
  margin-bottom: 0;
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
