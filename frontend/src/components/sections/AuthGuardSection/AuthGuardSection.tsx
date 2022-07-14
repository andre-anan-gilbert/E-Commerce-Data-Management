import { ReactNode } from 'react';
import { Section } from './styles';
import { Classes } from '@blueprintjs/core';
// import { useFetchUser } from '@queries/user';
// import { Loading } from './Loading';

type AuthGuardSectionProps = {
  children: ReactNode;
};

export const AuthGuardSection = ({ children }: AuthGuardSectionProps) => {
  // const { isLoading, isIdle } = useFetchUser();

  return <Section className={Classes.DARK}>{children}</Section>;
};
