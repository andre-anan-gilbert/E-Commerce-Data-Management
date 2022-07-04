/** The gradient background of the hero & outro section. */
import { ReactNode } from 'react';
import Image from 'next/image';
import Glow from '@images/glow.svg';
import Curve from '@images/curve.svg';
import { Section, GlowWrapper, ImageWrapper } from './styles';

type GradientBackgroundSectionProps = {
  /** Whether to flip the curve SVG on the x-axis. */
  curveFlipX?: boolean;
  children: ReactNode;
};

export const GradientBackgroundSection = ({
  curveFlipX,
  children,
}: GradientBackgroundSectionProps) => {
  return (
    <Section>
      <ImageWrapper flipX={curveFlipX}>
        <Image src={Curve} alt="Curve" layout="responsive" priority />
      </ImageWrapper>
      <GlowWrapper>
        <Image src={Glow} alt="Glow" layout="fill" priority />
      </GlowWrapper>
      {children}
    </Section>
  );
};
