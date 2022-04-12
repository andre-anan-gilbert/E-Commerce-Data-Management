import styled from 'styled-components';
import { H1, H3 } from '@blueprintjs/core';

export const Wrapper = styled.div`
  padding-top: 10rem;
  color: ${({ theme }) => theme.text.light};
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding-inline: 0.8rem;
  margin-bottom: 5rem;
`;

export const Title = styled(H1)`
  margin: 0;
  text-align: center;
`;

export const Subtitle = styled(H3)`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.text.muted};
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
  margin-inline: auto;
`;
