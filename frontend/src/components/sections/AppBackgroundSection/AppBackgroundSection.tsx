import { ReactNode } from 'react';
import { Section } from './styles';

type AppBackgroundSectionProps = {
  children: ReactNode;
};

export const AppBackgroundSection = ({
  children,
}: AppBackgroundSectionProps) => {
  return <Section>{children}</Section>;
};
