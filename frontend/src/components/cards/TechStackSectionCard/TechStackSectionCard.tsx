/** Card of the tech stack section. */
import { Icon, IconName, MaybeElement } from '@blueprintjs/core';
import { Wrapper, Title, Subtitle } from './styles';

type TechStackSectionCardProps = {
  icon: IconName | MaybeElement;
  title: string;
  subtitle: string;
};

export const TechStackSectionCard = ({
  icon,
  title,
  subtitle,
}: TechStackSectionCardProps) => {
  return (
    <Wrapper>
      <Icon icon={icon} size={30} />
      <Title>{title}</Title>
      <Subtitle>, {subtitle}</Subtitle>
    </Wrapper>
  );
};
