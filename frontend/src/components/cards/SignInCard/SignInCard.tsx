import Image from 'next/image';
import Logo from '@images/logo.svg';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Button,
  Classes,
  Card,
  FormGroup,
  InputGroup,
} from '@blueprintjs/core';
import { setToken, signIn } from '@queries/user';
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

type SignInCardProps = {
  handleClose: () => void;
};

export const SignInCard = ({ handleClose }: SignInCardProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const response = await signIn(email, password);
    if (response.status === 200) {
      setToken(response.data.access_token);
      router.push('/home');
    }
  };

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <>
      <Backdrop />
      <Wrapper>
        <Flex>
          <Card className={Classes.ELEVATION_1}>
            <CloseButtonWrapper>
              <Button icon="cross" onClick={handleClose} />
            </CloseButtonWrapper>
            <Subtitle>Sign in to</Subtitle>
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
                  data-cy="sign-in-email"
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
                  data-cy="sign-in-password"
                  onChange={handlePassword}
                />
              </FormGroup>
              <div className={Classes.DARK}>
                <Button
                  type="submit"
                  text="Submit"
                  intent="primary"
                  large
                  fill
                  data-cy="sign-in-submit"
                />
              </div>
            </form>
          </Card>
        </Flex>
      </Wrapper>
    </>
  );
};
