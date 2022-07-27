/** The sign up card. */
import Image from 'next/image';
import Logo from '@images/logo.svg';
import { ChangeEvent, FormEvent, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Classes,
  Card,
  FormGroup,
  InputGroup,
} from '@blueprintjs/core';
import { signUp, setToken } from '@queries/user';
import { useOnClickOutside } from '@hooks/use-on-click-outside';
import {
  Backdrop,
  Wrapper,
  Heading,
  Flex,
  CloseButtonWrapper,
  Title,
  Subtitle,
  Text,
} from './styles';

export const SignUpCard = ({ handleClose }: { handleClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();
  const ref = useRef<HTMLDivElement | null>(null);
  useOnClickOutside(ref, handleClose);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await signUp(email, password);
    if (response) {
      setToken(response.access_token);
      router.push('/home');
    }
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event: ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(event.target.value);
  };

  return (
    <>
      <Backdrop />
      <Wrapper>
        <Flex>
          <div ref={ref}>
            <Card className={Classes.ELEVATION_1}>
              <CloseButtonWrapper>
                <Button icon="cross" onClick={handleClose} minimal />
              </CloseButtonWrapper>
              <Subtitle>Sign up to</Subtitle>
              <Heading>
                <Image src={Logo} alt="logo" />
                <Title>404</Title>
              </Heading>
              <Text>Grab a cookie. We won&apos;t post anything anywhere.</Text>
              <form onSubmit={handleSubmit}>
                <FormGroup
                  label="Email address"
                  labelFor="text-input"
                  labelInfo="(required)"
                >
                  <InputGroup
                    value={email}
                    placeholder="Enter your email"
                    leftIcon="envelope"
                    large
                    data-cy="sign-up-email"
                    onChange={handleEmail}
                  />
                </FormGroup>
                <FormGroup
                  label="Password"
                  labelFor="text-input"
                  labelInfo="(required)"
                >
                  <InputGroup
                    value={password}
                    placeholder="Enter your password"
                    leftIcon="lock"
                    type="password"
                    large
                    data-cy="sign-up-password"
                    onChange={handlePassword}
                  />
                </FormGroup>
                <FormGroup
                  label="Confirm Password"
                  labelFor="text-input"
                  labelInfo="(required)"
                >
                  <InputGroup
                    value={confirmPassword}
                    placeholder="Confirm your password"
                    leftIcon="lock"
                    type="password"
                    large
                    data-cy="sign-up-confirm-password"
                    onChange={handleConfirmPassword}
                  />
                </FormGroup>
                <div className={Classes.DARK}>
                  <Button
                    type="submit"
                    text="Submit"
                    intent="primary"
                    large
                    fill
                    data-cy="sign-up-submit"
                  />
                </div>
              </form>
            </Card>
          </div>
        </Flex>
      </Wrapper>
    </>
  );
};
