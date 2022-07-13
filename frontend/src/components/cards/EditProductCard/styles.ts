import styled from 'styled-components';
import { H3 } from '@blueprintjs/core';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.text.dark};
  z-index: 1000;
  opacity: 0.05;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 2000;
  padding: 0 2rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Flex = styled.div`
  min-height: calc(100% - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CardWrapper = styled.div`
  width: min(100%, 40rem);
`;

export const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1.5rem;
`;

export const Title = styled(H3)`
  text-align: center;
  margin-bottom: 15px;
`;

export const Text = styled.p`
  font-size: 1.6rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;
