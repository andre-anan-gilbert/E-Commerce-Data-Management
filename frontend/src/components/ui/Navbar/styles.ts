import styled from 'styled-components';

export const Header = styled.header`
  position: absolute;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Wrapper = styled.div`
  width: min(100%, 120rem);
  min-height: 5rem;
  margin-inline: auto;
  padding-inline: 0.8rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: inline-block;
`;

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  font-weight: 500;
  border: none;
  white-space: nowrap;
`;

export const SignInButton = styled(Button)`
  color: ${({ theme }) => theme.text.light};
  background-color: transparent;
`;

export const SignUpButton = styled(Button)`
  padding: 0.8rem 1.6rem;
  margin-left: 1.6rem;

  color: ${({ theme }) => theme.text.light};
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.text.light};
  border-radius: 0.6rem;
`;
