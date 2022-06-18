import styled from 'styled-components';

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
