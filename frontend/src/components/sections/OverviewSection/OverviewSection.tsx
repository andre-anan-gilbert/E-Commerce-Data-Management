/** Overview section of the application. */
import World from '@images/world.svg';
import Data from '@images/data.svg';
import Management from '@images/management.svg';
import { Classes } from '@blueprintjs/core';
import { OverviewSectionCard } from '@cards/OverviewSectionCard/OverviewSectionCard';
import {
  Section,
  TextWrapper,
  Grid,
  Title,
  Subtitle,
  CardWrapper,
} from './styles';

export const OverviewSection = () => {
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
      <CardWrapper>
        {data.map((card) => (
          <OverviewSectionCard
            key={card.id}
            img={card.img}
            alt={card.alt}
            title={card.title}
            subtitle={card.subtitle}
          />
        ))}
      </CardWrapper>
    </Section>
  );
};

interface IData {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

const data: IData[] = [
  {
    id: 1,
    img: World,
    alt: 'World',
    title: 'World',
    subtitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
  },
  {
    id: 2,
    img: Data,
    alt: 'Data',
    title: 'Data',
    subtitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
  },
  {
    id: 3,
    img: Management,
    alt: 'Management',
    title: 'Management',
    subtitle: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
      sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.`,
  },
];
