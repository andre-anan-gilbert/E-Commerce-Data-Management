/** Tech stack section of the landing page. */
import dynamic from 'next/dynamic';
import { IconName, MaybeElement } from '@blueprintjs/core';
import { Classes } from '@blueprintjs/core';
import { TechStackSectionCard } from '@cards/TechStackSectionCard/TechStackSectionCard';
import { Section, Flex, Grid, Title, Subtitle } from './styles';

const CubeAnimation = dynamic<{}>(
  () =>
    import('@animations/CubeAnimation/CubeAnimation').then(
      (module) => module.CubeAnimation
    ),
  { ssr: false }
);

export const TechStackSection = () => {
  return (
    <Section>
      <Flex>
        <Grid>
          <Title>Tech Stack.</Title>
          <Subtitle className={`${Classes.RUNNING_TEXT} ${Classes.TEXT_LARGE}`}>
            This project consists of a database implemented with PostgreSQL, a
            backend server created with Python and the framework FastAPI, and a
            frontend that utilizes NextJS. SQLAlchemy serves as the
            object-relational mapping tool. Application and database are served
            in docker containers.
          </Subtitle>
          {data.map((card) => (
            <TechStackSectionCard
              key={card.id}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
            />
          ))}
        </Grid>
        <CubeAnimation />
      </Flex>
    </Section>
  );
};

interface IData {
  id: number;
  icon: IconName | MaybeElement;
  title: string;
  subtitle: string;
}

export const data: IData[] = [
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
