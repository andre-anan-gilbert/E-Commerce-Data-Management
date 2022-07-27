/** Section that needs user authentication. */
import { ReactNode } from 'react';
import { Section } from './styles';
import { Classes } from '@blueprintjs/core';
import { useFetchUser } from '@queries/user';
import { Loading } from './Loading';
import { useRouter } from 'next/router';

export const AuthGuardSection = ({ children }: { children: ReactNode }) => {
  const { data, isLoading } = useFetchUser();
  const router = useRouter();

  if (!data && !isLoading && typeof window !== 'undefined') {
    router.push('/');
  }

  return (
    <Section className={Classes.DARK}>
      {isLoading ? <Loading /> : children}
    </Section>
  );
};
