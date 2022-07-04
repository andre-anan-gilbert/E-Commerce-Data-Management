/** The hero section of the landing page. */
import Image from 'next/image';
import App from '@images/app.svg';
import AppSection from '@images/app-section.svg';
import { useState } from 'react';
import { Button, Classes } from '@blueprintjs/core';
import { GradientBackgroundSection } from '../GradientBackgroundSection/GradientBackgroundSection';
import { SignInCard } from '@cards/SignInCard/SignInCard';
import { SignUpCard } from '@cards/SignUpCard/SignUpCard';
import {
  Flex,
  TextWrapper,
  Title,
  Subtitle,
  Grid,
  ButtonWrapper,
  ImageWrapper,
  ImageApp,
  ImageAppSection,
  Spacing,
} from './styles';

export const HeroSection = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const handleOpenSignIn = () => setIsOpenSignIn(true);

  const handleCloseSignIn = () => setIsOpenSignIn(false);

  const handleOpenSignUp = () => setIsOpenSignUp(true);

  const handleCloseSignUp = () => setIsOpenSignUp(false);

  return (
    <GradientBackgroundSection>
      <Flex>
        <TextWrapper>
          <Grid>
            <Title className={Classes.DARK}>
              Foundational Software of Tomorrow. Delivered Today.
            </Title>
            <Subtitle className={Classes.DARK}>
              We build world-class software for data analytics and data-driven
              decision making.
            </Subtitle>
            <ButtonWrapper className={Classes.DARK}>
              <Button
                type="button"
                text="Sign in"
                intent="primary"
                large
                onClick={handleOpenSignIn}
              />
              <Spacing />
              <Button
                type="button"
                text="Sign up"
                outlined
                large
                onClick={handleOpenSignUp}
              />
            </ButtonWrapper>
          </Grid>
        </TextWrapper>
        <ImageWrapper>
          <ImageApp>
            <Image src={App} alt="App" layout="responsive" priority />
            <ImageAppSection>
              <Image
                src={AppSection}
                alt="App Section"
                layout="responsive"
                priority
              />
            </ImageAppSection>
          </ImageApp>
        </ImageWrapper>
      </Flex>
      {isOpenSignIn && <SignInCard handleClose={handleCloseSignIn} />}
      {isOpenSignUp && <SignUpCard handleClose={handleCloseSignUp} />}
    </GradientBackgroundSection>
  );
};
