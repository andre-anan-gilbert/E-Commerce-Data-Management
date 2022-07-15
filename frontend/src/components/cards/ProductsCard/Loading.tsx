/** Loading skeleton card of the products. */
import { Classes } from '@blueprintjs/core';
import { ListItem, ListText } from './styles';

export const Loading = () => {
  return (
    <>
      {products.map((product) => (
        <ListItem key={product}>
          <ListText className={Classes.SKELETON} />
          <ListText className={Classes.SKELETON} />
          <ListText className={Classes.SKELETON} />
          <ListText className={Classes.SKELETON} />
          <ListText className={Classes.SKELETON} />
        </ListItem>
      ))}
    </>
  );
};

const products: number[] = [1, 2, 3, 4, 5];
