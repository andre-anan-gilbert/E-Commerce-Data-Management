/** Tech stack section of the landing page. */
import dynamic from 'next/dynamic';
import { Classes } from '@blueprintjs/core';
import { TechStackSectionCard } from '@cards/TechStackSectionCard/TechStackSectionCard';
import { techStackCardData } from '@data/tech-stack-card-data';
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
          {techStackCardData.map((card) => (
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
