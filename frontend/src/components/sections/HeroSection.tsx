/** The hero section of the landing page. */
import styled from 'styled-components';
import Image from 'next/image';
import App from '../../images/app.svg';
import { H1, H3, Classes } from '@blueprintjs/core';
import { GradientBackgroundSection } from './GradientBackgroundSection';
import { SignInButton } from '../buttons/SignInButton';
import { SignUpButton } from '../buttons/SignUpButton';

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

const Wrapper = styled.div`
  padding-top: 10rem;
  color: ${({ theme }) => theme.text.light};
`;

const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding-inline: 0.8rem;
  margin-bottom: 5rem;
`;

const Title = styled(H1)`
  margin: 0;
  text-align: center;
`;

const Subtitle = styled(H3)`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.text.muted};
`;

const ButtonWrapper = styled.div`
  display: inline-block;
  margin-inline: auto;
`;
