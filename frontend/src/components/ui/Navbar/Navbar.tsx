/** The navbar of the landing page. */
import Image from 'next/image';
import Logo from '@images/logo.svg';
import { useState } from 'react';
import { Button, Classes } from '@blueprintjs/core';
import { SignInCard } from '@cards/SignInCard/SignInCard';
import { SignUpCard } from '@cards/SignUpCard/SignUpCard';
import { Header, Wrapper, ButtonWrapper, Spacing } from './styles';

export const Navbar = () => {
  const [isOpenSignIn, setIsOpenSignIn] = useState(false);
  const [isOpenSignUp, setIsOpenSignUp] = useState(false);

  const handleOpenSignIn = () => setIsOpenSignIn(true);

  const handleCloseSignIn = () => setIsOpenSignIn(false);

  const handleOpenSignUp = () => setIsOpenSignUp(true);

  const handleCloseSignUp = () => setIsOpenSignUp(false);

  return (
    <Header>
      <Wrapper>
        <Image src={Logo} alt="logo" priority />
        <ButtonWrapper className={Classes.DARK}>
          <Button
            type="button"
            text="Sign in"
            minimal
            onClick={handleOpenSignIn}
          />
          <Spacing />
          <Button
            type="button"
            text="Sign up"
            minimal
            outlined
            onClick={handleOpenSignUp}
          />
        </ButtonWrapper>
      </Wrapper>
      {isOpenSignIn && <SignInCard handleClose={handleCloseSignIn} />}
      {isOpenSignUp && <SignUpCard handleClose={handleCloseSignUp} />}
    </Header>
  );
};
