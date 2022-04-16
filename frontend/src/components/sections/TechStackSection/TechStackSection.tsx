import { Classes } from '@blueprintjs/core';
import { Section, Grid, Title, Subtitle } from './styles';

export const TechStackSection = () => {
  return (
    <Section>
      <Grid>
        <Title>Tech Stack.</Title>
        <Subtitle className={`${Classes.RUNNING_TEXT} ${Classes.TEXT_LARGE}`}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </Subtitle>
      </Grid>
    </Section>
  );
};
