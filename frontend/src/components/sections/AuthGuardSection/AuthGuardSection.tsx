import { ReactNode } from 'react';
import { Section } from './styles';
import { Classes } from '@blueprintjs/core';
import { useRouter } from 'next/router';
import { useFetchUser } from '@queries/user';
import { Loading } from './Loading';

type AuthGuardSectionProps = {
  children: ReactNode;
};

export const AuthGuardSection = ({ children }: AuthGuardSectionProps) => {
  const { data, isLoading, isIdle } = useFetchUser();
  const router = useRouter();

  if (!data && typeof window !== 'undefined') {
    router.push('/');
  }

  return (
    <Section className={Classes.DARK}>
      {isLoading || isIdle ? <Loading /> : children}
    </Section>
  );
};
