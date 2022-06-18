/** The navbar of the landing page. */
import Image from 'next/image';
import Logo from '@images/logo.svg';
import { useState } from 'react';
import { SignInCard } from '@cards/SignInCard/SignInCard';
import {
  Header,
  Wrapper,
  ButtonWrapper,
  SignInButton,
  SignUpButton,
} from './styles';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Header>
      <Wrapper>
        <Image src={Logo} alt="logo" priority />
        <ButtonWrapper>
          <SignInButton type="button" onClick={handleOpen}>
            Sign in
          </SignInButton>
          <SignUpButton type="button">Sign up</SignUpButton>
        </ButtonWrapper>
      </Wrapper>
      {isOpen && <SignInCard handleClose={handleClose} />}
    </Header>
  );
};
