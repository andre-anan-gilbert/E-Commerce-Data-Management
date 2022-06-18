/** The outro section of the landing page. */
import Image from 'next/image';
import Tools from '@images/tools.svg';
import { Classes } from '@blueprintjs/core';
import { SignInButton } from '@buttons/SignInButton/SignInButton';
import { SignUpButton } from '@buttons/SignUpButton/SignUpButton';
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
} from './styles';

export const OutroSection = () => {
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
            <ButtonWrapper>
              <SignInButton />
              <SignUpButton />
            </ButtonWrapper>
          </Grid>
        </TextWrapper>
        <ImageWrapper>
          <ImageApp>
            <Image src={Tools} alt="App" layout="responsive" priority />
          </ImageApp>
        </ImageWrapper>
      </Flex>
    </GradientBackgroundSection>
  );
};
