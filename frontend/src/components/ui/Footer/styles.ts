import styled from 'styled-components';
import { IPage } from './types';
import { Colors } from '@blueprintjs/core';

export const Foo = styled.div<IPage>`
  width: 100%;
  padding-inline: 1.2rem;
  background-color: ${({ landing }) =>
    landing ? 'transparent' : Colors.DARK_GRAY3};
`;

export const Wrapper = styled.div<IPage>`
  width: min(100%, 120rem);
  min-height: 5rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: ${({ landing }) =>
    landing ? 'none' : `1px solid ${Colors.GRAY1}`};
`;

export const Copyright = styled.p`
  margin: 0;
`;
