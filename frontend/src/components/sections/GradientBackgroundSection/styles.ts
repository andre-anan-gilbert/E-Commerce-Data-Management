import styled from 'styled-components';
import { IFlipXProps } from './types';

export const Section = styled.section`
  position: relative;
  height: min(75rem, 92.6rem);
  background: ${({ theme }) => theme.primary};
  z-index: -1;
`;

export const BlobWrapper = styled.div`
  position: absolute;
  top: 60%;
  left: 100%;
  width: 80%;
  transform: translate(-100%, -60%);
  z-index: -1;
`;

export const ImageWrapper = styled.div<IFlipXProps>`
  position: absolute;
  top: ${({ flipX }) => (flipX ? '-0.05rem' : 'auto')};
  bottom: ${({ flipX }) => (flipX ? 'auto' : '-0.05rem')};
  transform: ${({ flipX }) => (flipX ? 'scaleY(-1)' : 'none')};
  z-index: -1;
  width: 100%;
`;
