import dynamic from 'next/dynamic';
import { Classes } from '@blueprintjs/core';
import { TechStackSectionCard } from '@cards/TechStackSectionCard/TechStackSectionCard';
import { techStackCardData } from '@data/tech-stack-card-data';
import { Section, Flex, Grid, Title, Subtitle } from './styles';

const CubeAnimation = dynamic<{}>(() =>
  import('@animations/CubeAnimation/CubeAnimation').then(
    module => module.CubeAnimation
  )
);

export const TechStackSection = () => {
  const teckStackCards = techStackCardData.map(card => (
    <TechStackSectionCard
      key={card.id}
      icon={card.icon}
      title={card.title}
      subtitle={card.subtitle}
    />
  ));

  return (
    <Section>
      <Flex>
        <Grid>
          <Title>Tech Stack.</Title>
          <Subtitle className={`${Classes.RUNNING_TEXT} ${Classes.TEXT_LARGE}`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Subtitle>
          {teckStackCards}
        </Grid>
        <CubeAnimation />
      </Flex>
    </Section>
  );
};
