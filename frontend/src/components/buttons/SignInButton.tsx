/** The sign in button of the hero & outro section. */
import styled from 'styled-components';

export const SignInButton = () => {
  return <Button type="button">Sign in</Button>;
};

const Button = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.6rem 1.8rem;
  border-radius: 0.6rem;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.text.light};
  background-color: ${({ theme }) => theme.secondary};
  box-shadow: 0 2rem 4rem rgb(141, 141, 247, 0.25);

  white-space: nowrap;
  border: none;
  transition: background-color 0.2s, padding 0.4s, box-shadow 0.2s, border 0.2s;
`;
