/** Card of the overview section. */
import Image from 'next/image';
import { Classes } from '@blueprintjs/core';
import { Card, ImageWrapper, Title, Subtitle } from './styles';

export const OverviewSectionCard = ({
  img,
  alt,
  title,
  subtitle,
}: {
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}) => {
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
