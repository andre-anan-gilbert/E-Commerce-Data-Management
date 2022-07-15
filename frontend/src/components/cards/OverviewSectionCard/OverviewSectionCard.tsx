/** Card of the overview section. */
import Image from 'next/image';
import { Classes } from '@blueprintjs/core';
import { Card, ImageWrapper, Title, Subtitle } from './styles';

type OverviewSectionCardProps = {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
};

export const OverviewSectionCard = ({
  img,
  alt,
  title,
  subtitle,
}: OverviewSectionCardProps) => {
  return (
    <Card>
      <ImageWrapper>
        <Image src={img} alt={alt} />
      </ImageWrapper>
      <Title>{title}</Title>
      <Subtitle className={Classes.RUNNING_TEXT}>{subtitle}</Subtitle>
    </Card>
  );
};
