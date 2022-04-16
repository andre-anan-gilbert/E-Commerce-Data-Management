import { Classes } from '@blueprintjs/core';
import {
  Section,
  TextWrapper,
  Grid,
  Title,
  Subtitle,
  CardWrapper,
} from './styles';
import { OverviewSectionCard } from '../../cards';
import { overviewCardData } from '../../../data/overview-card-data';

export const OverviewSection = () => {
  const overviewCards = overviewCardData.map(cardData => (
    <OverviewSectionCard
      key={cardData.id}
      img={cardData.img}
      imgAlt={cardData.imgAlt}
      title={cardData.title}
      subtitle={cardData.subtitle}
    />
  ));

  return (
    <Section>
      <TextWrapper>
        <Grid>
          <Title>Why 404</Title>
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
