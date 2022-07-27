/** The gradient background of the hero & outro section. */
import { ReactNode } from 'react';
import Image from 'next/image';
import Glow from '@images/glow.svg';
import Curve from '@images/curve.svg';
import { Section, GlowWrapper, ImageWrapper } from './styles';

export const GradientBackgroundSection = ({
  curveFlipX,
  children,
}: {
  curveFlipX?: boolean;
  children: ReactNode;
}) => {
  return (
    <Section>
      <ImageWrapper curveFlipX={curveFlipX}>
        <Image src={Curve} alt="Curve" layout="responsive" priority />
      </ImageWrapper>
      <GlowWrapper>
        <Image src={Glow} alt="Glow" layout="fill" priority />
      </GlowWrapper>
      {children}
    </Section>
  );
};
