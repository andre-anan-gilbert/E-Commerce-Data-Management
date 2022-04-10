/** The gradient background of the hero & outro section. */
import { ReactNode } from 'react';
import { IFlipX } from '../../types/interfaces';
import Image from 'next/image';
import Curve from '../../images/curve.svg';
import styled from 'styled-components';

type GradientBackgroundSectionProps = {
  curveFlipX: boolean;
  children: ReactNode;
};

export const GradientBackgroundSection = ({
  curveFlipX,
  children,
}: GradientBackgroundSectionProps) => {
  return (
    <Section>
      {children}
      <ImageWrapper flipX={curveFlipX}>
        <Image src={Curve} alt="Curve" layout="responsive" />
      </ImageWrapper>
    </Section>
  );
};

const Section = styled.section`
  position: relative;
  height: min(75rem, 92.6rem);
  background: ${({ theme }) => theme.primary};
  z-index: -1;
`;

const ImageWrapper = styled.div<IFlipX>`
  position: absolute;
  top: ${({ flipX }) => (flipX ? '-0.05rem' : 'auto')};
  bottom: ${({ flipX }) => (flipX ? 'auto' : '-0.05rem')};
  transform: ${({ flipX }) => (flipX ? 'scaleY(-1)' : 'none')};
  z-index: -1;
  width: 100%;
`;
