import {
  Card,
  Button,
  FormGroup,
  InputGroup,
  TextArea,
  Classes,
  NumericInput,
} from '@blueprintjs/core';
import { useState } from 'react';
import {
  Backdrop,
  Wrapper,
  Flex,
  CloseButtonWrapper,
  Title,
  CardWrapper,
} from './styles';

type EditProductCardProps = {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    category_id: number;
    supplier_id: number;
  };
  handleClose: () => void;
};

export const EditProductCard = ({
  product,
  handleClose,
}: EditProductCardProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState();
  const [supplier, setSupplier] = useState();

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
              <Title>Edit Product</Title>
              <FormGroup
                label="Name"
                labelFor="text-input"
                labelInfo="(required)"
              >
                <InputGroup
                  value={product.name}
                  placeholder="Product name"
                  large
                />
              </FormGroup>
              <FormGroup
                label="Description"
                labelFor="text-input"
                labelInfo="(required)"
              >
                <TextArea
                  value={product.description}
                  placeholder="Description"
                  large
                  fill
                />
              </FormGroup>
              <FormGroup
                label="Price"
                labelFor="number-input"
                labelInfo="(required)"
              >
                <NumericInput
                  value={product.price}
                  placeholder="Price in EUR"
                  allowNumericCharactersOnly={false}
                  large
                  fill
                  min={0}
                />
              </FormGroup>
              <FormGroup
                label="Category"
                labelFor="number-input"
                labelInfo="(required)"
              >
                <NumericInput
                  value={product.category_id}
                  placeholder="Category"
                  large
                  fill
                  min={0}
                />
              </FormGroup>
              <FormGroup
                label="Supplier"
                labelFor="number-input"
                labelInfo="(required)"
              >
                <NumericInput
                  value={product.supplier_id}
                  placeholder="Supplier"
                  large
                  fill
                  min={0}
                />
              </FormGroup>
              <Button text="Update" intent="primary" fill type="submit" />
            </Card>
          </CardWrapper>
        </Flex>
      </Wrapper>
    </>
  );
};
