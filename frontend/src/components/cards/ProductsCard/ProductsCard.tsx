import { useState } from 'react';
import { Classes, Button } from '@blueprintjs/core';
import {
  Card,
  LabelWrapper,
  ListItem,
  Label,
  ListText,
  ButtonWrapper,
  Spacing,
} from './styles';
import { useProducts, IProducts } from '@queries/products';
import { EditProductCard } from '@cards/EditProductCard/EditProductCard';
import { DeleteProductCard } from '@cards/DeleteProductCard/DeleteProductCard';

export const ProductsCard = () => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const { data, error, isError, isLoading, isIdle } = useProducts();

  const handleOpenEdit = () => setIsOpenEdit(true);

  const handleCloseEdit = () => setIsOpenEdit(false);

  const handleOpenDelete = () => setIsOpenDelete(true);

  const handleCloseDelete = () => setIsOpenDelete(false);

  if (isLoading || isIdle) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error {error!}</div>;
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
      {data.map((product: IProducts) => (
        <ListItem key={product.id}>
          <ListText>{product.name}</ListText>
          <ListText>{product.description}</ListText>
          <ListText>{product.price}</ListText>
          <ListText>{product.category_id}</ListText>
          <ListText>{product.supplier_id}</ListText>
          <ButtonWrapper>
            <Button icon="edit" intent="primary" onClick={handleOpenEdit} />
            {isOpenEdit && (
              <EditProductCard
                product={product}
                handleClose={handleCloseEdit}
              />
            )}
            <Spacing />
            <Button icon="trash" intent="danger" onClick={handleOpenDelete} />
            {isOpenDelete && (
              <DeleteProductCard handleClose={handleCloseDelete} />
            )}
          </ButtonWrapper>
        </ListItem>
      ))}
    </Card>
  );
};
