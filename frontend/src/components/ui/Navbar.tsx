/** The navbar of the landing page. */
import styled from 'styled-components';
import Image from 'next/image';
import Logo from '../../images/logo.svg';

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

const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;
`;

const Wrapper = styled.div`
  width: min(100%, 120rem);
  min-height: 5rem;
  margin-inline: auto;
  padding-inline: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.div`
  display: inline-block;
`;

const Button = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  border: none;
  white-space: nowrap;
`;

const SignInButton = styled(Button)`
  color: ${({ theme }) => theme.text.light};
  background-color: transparent;
`;

const SignUpButton = styled(Button)`
  padding: 0.8rem 1.6rem;
  margin-left: 1.6rem;

  color: ${({ theme }) => theme.text.light};
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.text.light};
  border-radius: 0.6rem;
`;
