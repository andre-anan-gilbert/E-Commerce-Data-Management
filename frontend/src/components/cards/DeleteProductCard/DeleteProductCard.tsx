/** Card to delete products. */
import { Button, Card, Classes } from '@blueprintjs/core';
import { useDeleteProduct } from '@queries/products';
import { FormEvent, useState } from 'react';
import {
  Backdrop,
  Wrapper,
  Flex,
  CardWrapper,
  CloseButtonWrapper,
  Title,
} from './styles';

export const DeleteProductCard = ({ id }: { id: number }) => {
  const [isOpen, setIsOpen] = useState(false);
  const deleteProduct = useDeleteProduct();

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    deleteProduct.mutate(id);
    handleClose();
  };

  return (
    <>
      <Button icon="trash" intent="danger" onClick={handleOpen} />
      {isOpen && (
        <>
          <Backdrop />
          <Wrapper>
            <Flex>
              <CardWrapper>
                <Card className={Classes.ELEVATION_1}>
                  <CloseButtonWrapper>
                    <Button icon="cross" onClick={handleClose} minimal />
                  </CloseButtonWrapper>
                  <Title>Delete Product</Title>
                  <p>Do you really want to delete this product?</p>
                  <form onSubmit={handleSubmit}>
                    <Button text="Delete" intent="primary" fill type="submit" />
                  </form>
                </Card>
              </CardWrapper>
            </Flex>
          </Wrapper>
        </>
      )}
    </>
  );
};
