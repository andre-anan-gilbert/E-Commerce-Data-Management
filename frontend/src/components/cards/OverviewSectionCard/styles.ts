import styled from 'styled-components';
import { H3 } from '@blueprintjs/core';
import { Breakpoints } from '../../../styles';

export const Card = styled.div`
  flex: 1 1 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin-inline: 2rem;
  margin-bottom: 2rem;

  @media (min-width: ${Breakpoints.TABLET}) {
    flex: 1 1 30%;
  }
`;

export const ImageWrapper = styled.div`
  margin-inline: auto;
  margin-bottom: 2rem;
`;

export const Title = styled(H3)`
  text-align: center;
`;

export const Subtitle = styled.p`
  text-align: center;
  margin: 0;
`;
