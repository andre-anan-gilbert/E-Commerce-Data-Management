/** The hero section of the landing page. */
import Image from 'next/image';
import App from '../../../images/app.svg';
import { Classes } from '@blueprintjs/core';
import { GradientBackgroundSection } from '../GradientBackgroundSection/GradientBackgroundSection';
import { SignInButton, SignUpButton } from '../../buttons';
import { Wrapper, Title, Subtitle, Grid, ButtonWrapper } from './styles';

export const HeroSection = () => {
  return (
    <GradientBackgroundSection curveFlipX={false}>
      <Wrapper>
        <Grid>
          <Title className={Classes.DARK}>
            Foundational Software of Tomorrow. Delivered Today.
          </Title>
          <Subtitle className={Classes.DARK}>
            We build world-class software for data analytics and data-driven
            decision making.
          </Subtitle>
          <ButtonWrapper>
            <SignInButton />
            <SignUpButton />
          </ButtonWrapper>
        </Grid>
      </Wrapper>
      <Image src={App} alt="App" />
    </GradientBackgroundSection>
  );
};
