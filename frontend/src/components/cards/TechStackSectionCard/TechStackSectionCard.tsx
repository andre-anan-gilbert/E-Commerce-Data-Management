/** Card of the tech stack section. */
import { Icon, IconName, MaybeElement } from '@blueprintjs/core';
import { Wrapper, Title, Subtitle } from './styles';

export const TechStackSectionCard = ({
  icon,
  title,
  subtitle,
}: {
  icon: IconName | MaybeElement;
  title: string;
  subtitle: string;
}) => {
  return (
    <Wrapper>
      <Icon icon={icon} size={30} />
      <Title>{title}</Title>
      <Subtitle>, {subtitle}</Subtitle>
    </Wrapper>
  );
};
