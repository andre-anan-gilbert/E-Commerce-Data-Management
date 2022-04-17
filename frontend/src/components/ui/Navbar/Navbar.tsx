/** The navbar of the landing page. */
import Image from 'next/image';
import Logo from '@images/logo.svg';
import {
  Header,
  Wrapper,
  ButtonWrapper,
  SignInButton,
  SignUpButton,
} from './styles';

export const Navbar = () => {
  return (
    <Header>
      <Wrapper>
        <Image src={Logo} alt="logo" />
        <ButtonWrapper>
          <SignInButton type="button">Sign in</SignInButton>
          <SignUpButton type="button">Sign up</SignUpButton>
        </ButtonWrapper>
      </Wrapper>
    </Header>
  );
};
