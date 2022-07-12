import { Button, Card, Classes } from '@blueprintjs/core';
import {
  Backdrop,
  Wrapper,
  Flex,
  CardWrapper,
  CloseButtonWrapper,
  Title,
} from './styles';

type DeleteProductCardProps = { handleClose: () => void };

export const DeleteProductCard = ({ handleClose }: DeleteProductCardProps) => {
  return (
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
              <Button text="Delete" intent="primary" fill type="submit" />
            </Card>
          </CardWrapper>
        </Flex>
      </Wrapper>
    </>
  );
};
