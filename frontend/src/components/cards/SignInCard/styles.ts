import styled from 'styled-components';
import { H1, H2 } from '@blueprintjs/core';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.text.dark};
  z-index: 9050;
  opacity: 0.5;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9051;
  padding: 0 2rem;
  overflow-y: auto;
  overflow-x: hidden;
  will-change: opacity, transform;
`;

export const Flex = styled.div`
  min-height: calc(100% - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  margin-bottom: 1.5rem;
`;

export const Subtitle = styled(H2)`
  text-align: center;
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const Title = styled(H1)`
  text-align: center;
  margin: 0;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
