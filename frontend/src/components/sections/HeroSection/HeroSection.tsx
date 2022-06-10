/** The hero section of the landing page. */
import Image from 'next/image';
import App from '@images/app.svg';
import AppSection from '@images/app-section.svg';
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
  ImageAppSection,
} from './styles';

export const HeroSection = () => {
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
            <ButtonWrapper>
              <SignInButton />
              <SignUpButton />
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
    </GradientBackgroundSection>
  );
};
