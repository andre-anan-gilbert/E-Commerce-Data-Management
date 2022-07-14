import { ReactNode } from 'react';
import { Section } from './styles';
import { Classes } from '@blueprintjs/core';
import { useFetchUser } from '@queries/user';
import { Loading } from './Loading';
import { useRouter } from 'next/router';

type AuthGuardSectionProps = {
  children: ReactNode;
};

export const AuthGuardSection = ({ children }: AuthGuardSectionProps) => {
  const { data, isLoading } = useFetchUser();
  const router = useRouter();

  if (isLoading) {
    return (
      <Section className={Classes.DARK}>
        <Loading />
      </Section>
    );
  }

  if (!data?.email) {
    router.push('/');
  }

  return <Section className={Classes.DARK}>{children}</Section>;
};
