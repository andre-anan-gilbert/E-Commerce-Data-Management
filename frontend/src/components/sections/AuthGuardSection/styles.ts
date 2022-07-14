import styled from 'styled-components';
import { Colors } from '@blueprintjs/core';

export const Section = styled.section`
  padding: 10rem 1rem;
  background-color: ${Colors.DARK_GRAY3};
`;

export const SpinnerWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 200;
  padding: 0 2rem;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: ${({ theme }) => theme.text.dark};
  z-index: 100;
  opacity: 0.5;
`;

export const Flex = styled.div`
  min-height: calc(100% - 8rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;
