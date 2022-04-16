/** The data for the cards in the tech stack section of the landing page. */
import { IconName, MaybeElement } from '@blueprintjs/core';

interface ITechStackCard {
  id: number;
  icon: IconName | MaybeElement;
  title: string;
  subtitle: string;
}

export const techStackCardData: ITechStackCard[] = [
  {
    id: 1,
    icon: 'application',
    title: 'Next.js',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 2,
    icon: 'layers',
    title: 'FastAPI',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 3,
    icon: 'database',
    title: 'PostgreSQL',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
  {
    id: 4,
    icon: 'cargo-ship',
    title: 'Docker',
    subtitle: 'Lorem ipsum dolor sit amet',
  },
];
