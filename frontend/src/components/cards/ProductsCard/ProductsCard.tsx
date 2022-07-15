/** The card for the products. */
import { Classes } from '@blueprintjs/core';
import { Loading } from './Loading';
import {
  Card,
  LabelWrapper,
  ListItem,
  Label,
  ListText,
  ButtonWrapper,
  Spacing,
} from './styles';
import { useFetchProducts } from '@queries/products';
import { EditProductCard } from '@cards/EditProductCard/EditProductCard';
import { DeleteProductCard } from '@cards/DeleteProductCard/DeleteProductCard';

export const ProductsCard = () => {
  const { data, error, isError, isLoading } = useFetchProducts();

  if (isError) {
    return <div>Error {error?.message}</div>;
  }

  return (
    <Card>
      <LabelWrapper className={Classes.TEXT_MUTED}>
        <Label>Name</Label>
        <Label>Description</Label>
        <Label>Price</Label>
        <Label>Category</Label>
        <Label>Supplier</Label>
      </LabelWrapper>
      {data?.map((product) => (
        <ListItem key={product.id}>
          <ListText>{product.name}</ListText>
          <ListText>{product.description}</ListText>
          <ListText>{product.price}</ListText>
          <ListText>{product.category_id}</ListText>
          <ListText>{product.supplier_id}</ListText>
          <ButtonWrapper>
            <EditProductCard product={product} />
            <Spacing />
            <DeleteProductCard id={product.id} />
          </ButtonWrapper>
        </ListItem>
      ))}
      {isLoading && <Loading />}
    </Card>
  );
};
