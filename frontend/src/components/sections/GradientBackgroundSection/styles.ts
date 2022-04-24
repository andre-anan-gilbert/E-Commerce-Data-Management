import styled from 'styled-components';
import { IFlipXProps } from './types';
import { TABLET } from '@styles/breakpoints';

export const Section = styled.section`
  position: relative;
  height: min(75rem, 92.6rem);
  background: ${({ theme }) => theme.primary};
  z-index: -1;
`;

export const GlowWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: 75%;
  width: 60%;
  height: 100%;
  transform: translate(-80%, -50%);
  z-index: -1;

  @media (min-width: ${TABLET}) {
    top: 60%;
    left: 100%;
    transform: translate(-100%, -60%);
  }
`;

export const ImageWrapper = styled.div<IFlipXProps>`
  position: absolute;
  top: ${({ flipX }) => (flipX ? '-0.05rem' : 'auto')};
  bottom: ${({ flipX }) => (flipX ? 'auto' : '-0.05rem')};
  transform: ${({ flipX }) => (flipX ? 'scaleY(-1)' : 'none')};
  z-index: -1;
  width: 100%;
`;
