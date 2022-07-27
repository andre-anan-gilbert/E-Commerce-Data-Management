import styled from 'styled-components';
import * as Breakpoints from '@styles/breakpoints';

export const Section = styled.section`
  position: relative;
  height: min(75rem, 92.6rem);
  background: ${({ theme }) => theme.primary};
`;

export const GlowWrapper = styled.div`
  position: absolute;
  top: 80%;
  left: 75%;
  width: 60%;
  height: 30%;
  transform: translate(-80%, -50%);

  @media (min-width: ${Breakpoints.MD}) {
    top: 60%;
    left: 100%;
    height: 100%;
    transform: translate(-100%, -60%);
  }
`;

export const ImageWrapper = styled.div<{ curveFlipX: boolean | undefined }>`
  position: absolute;
  top: ${({ curveFlipX }) => (curveFlipX ? '-0.05rem' : 'auto')};
  bottom: ${({ curveFlipX }) => (curveFlipX ? 'auto' : '-0.05rem')};
  transform: ${({ curveFlipX }) => (curveFlipX ? 'scaleY(-1)' : 'none')};
  width: 100%;
`;
