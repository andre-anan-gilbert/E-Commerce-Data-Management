import { Classes } from '@blueprintjs/core';
import { Section, TextWrapper, Grid, Title, Subtitle } from './styles';
import { OverviewSectionCard } from '../../cards';

export const OverviewSection = () => {
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
      <OverviewSectionCard />
    </Section>
  );
};
