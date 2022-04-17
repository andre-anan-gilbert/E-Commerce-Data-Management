import { Classes } from '@blueprintjs/core';
import { TechStackSectionCard } from '@/cards/TechStackSectionCard/TechStackSectionCard';
import { techStackCardData } from '@/data/tech-stack-card-data';
import { Section, Grid, Title, Subtitle } from './styles';

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
      <Grid>
        <Title>Tech Stack.</Title>
        <Subtitle className={`${Classes.RUNNING_TEXT} ${Classes.TEXT_LARGE}`}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Subtitle>
        {teckStackCards}
      </Grid>
    </Section>
  );
};
