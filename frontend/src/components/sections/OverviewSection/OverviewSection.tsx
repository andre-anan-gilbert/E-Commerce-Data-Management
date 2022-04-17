import { Classes } from '@blueprintjs/core';
import { OverviewSectionCard } from '@/cards/OverviewSectionCard/OverviewSectionCard';
import { overviewCardData } from '@/data/overview-card-data';
import {
  Section,
  TextWrapper,
  Grid,
  Title,
  Subtitle,
  CardWrapper,
} from './styles';

export const OverviewSection = () => {
  const overviewCards = overviewCardData.map(card => (
    <OverviewSectionCard
      key={card.id}
      img={card.img}
      alt={card.alt}
      title={card.title}
      subtitle={card.subtitle}
    />
  ));

  return (
    <Section>
      <TextWrapper>
        <Grid>
          <Title>What is 404?</Title>
          <Subtitle className={`${Classes.RUNNING_TEXT} ${Classes.TEXT_LARGE}`}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </Subtitle>
        </Grid>
      </TextWrapper>
      <CardWrapper>{overviewCards}</CardWrapper>
    </Section>
  );
};
