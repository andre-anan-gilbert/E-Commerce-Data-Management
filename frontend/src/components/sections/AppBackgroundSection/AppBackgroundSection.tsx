import { ReactNode } from 'react';
import { Section } from './styles';
import { Classes } from '@blueprintjs/core';

type AppBackgroundSectionProps = {
  children: ReactNode;
};

export const AppBackgroundSection = ({
  children,
}: AppBackgroundSectionProps) => {
  return <Section className={Classes.DARK}>{children}</Section>;
};
