/** The outro section of the landing page. */
import Image from 'next/image';
import Tools from '@images/tools.svg';
import { useState } from 'react';
import { SignInCard } from '@cards/SignInCard/SignInCard';
import { SignUpCard } from '@cards/SignUpCard/SignUpCard';
import { Button, Classes } from '@blueprintjs/core';
import { GradientBackgroundSection } from '../GradientBackgroundSection/GradientBackgroundSection';
import {
  Flex,
  TextWrapper,
  Title,
  Subtitle,
  Grid,
  ButtonWrapper,
  ImageWrapper,
  ImageApp,
  Spacing,
} from './styles';

export const OutroSection = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const handleOpenSignIn = () => setIsOpenSignIn(true);

  const handleCloseSignIn = () => setIsOpenSignIn(false);

  const handleOpenSignUp = () => setIsOpenSignUp(true);

  const handleCloseSignUp = () => setIsOpenSignUp(false);

  return (
    <GradientBackgroundSection curveFlipX>
      <Flex>
        <TextWrapper>
          <Grid>
            <Title className={Classes.DARK}>Get Started Now.</Title>
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
                minimal
                outlined
                large
                onClick={handleOpenSignUp}
              />
            </ButtonWrapper>
          </Grid>
        </TextWrapper>
        <ImageWrapper>
          <ImageApp>
            <Image src={Tools} alt="App" layout="responsive" priority />
          </ImageApp>
        </ImageWrapper>
      </Flex>
      {isOpenSignIn && <SignInCard handleClose={handleCloseSignIn} />}
      {isOpenSignUp && <SignUpCard handleClose={handleCloseSignUp} />}
    </GradientBackgroundSection>
  );
};
