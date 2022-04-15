import Image from 'next/image';
import World from '../../../images/world.svg';
import Data from '../../../images/data.svg';
import Management from '../../../images/management.svg';
import { Classes } from '@blueprintjs/core';
import { Wrapper, Card, ImageWrapper, Title, Subtitle } from './styles';

export const OverviewSectionCard = () => {
  return (
    <Wrapper>
      <Card>
        <ImageWrapper>
          <Image src={World} alt="World" />
        </ImageWrapper>
        <Title>World</Title>
        <Subtitle className={Classes.RUNNING_TEXT}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </Subtitle>
      </Card>
      <Card>
        <ImageWrapper>
          <Image src={Data} alt="Data" />
        </ImageWrapper>
        <Title>Data</Title>
        <Subtitle className={Classes.RUNNING_TEXT}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </Subtitle>
      </Card>
      <Card>
        <ImageWrapper>
          <Image src={Management} alt="Management" />
        </ImageWrapper>
        <Title>Management</Title>
        <Subtitle className={Classes.RUNNING_TEXT}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
        </Subtitle>
      </Card>
    </Wrapper>
  );
};
