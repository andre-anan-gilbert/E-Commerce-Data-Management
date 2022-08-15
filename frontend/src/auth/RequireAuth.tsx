import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import { useFetchUser } from '@queries/user';
import { Classes, Spinner, SpinnerSize } from '@blueprintjs/core';
import { Section, Loading, SpinnerWrapper, Flex } from './styles';

export const RequireAuth = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useFetchUser();
  const router = useRouter();

  if (isLoading) {
    return (
      <Loading>
        <SpinnerWrapper>
          <Flex>
            <Spinner size={SpinnerSize.LARGE} />
          </Flex>
        </SpinnerWrapper>
      </Loading>
    );
  }

  if (isError) {
    router.push('/');
  }

  return <Section className={Classes.DARK}>{children}</Section>;
};
