/** The data for the cards in the overview section of the landing page. */
import World from '@images/world.svg';
import Data from '@images/data.svg';
import Management from '@images/management.svg';

interface IOverviewCard {
  id: number;
  img: string;
  alt: string;
  title: string;
  subtitle: string;
}

export const overviewCardData: IOverviewCard[] = [
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
