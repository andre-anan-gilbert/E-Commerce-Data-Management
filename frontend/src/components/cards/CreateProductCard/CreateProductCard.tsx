import {
  Card,
  Button,
  FormGroup,
  InputGroup,
  NumericInput,
  TextArea,
  Classes,
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

type CreateProductCardProps = {
  handleClose: () => void;
};

export const CreateProductCard = ({ handleClose }: CreateProductCardProps) => {
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
              <Title>Create Product</Title>
              <FormGroup
                label="Name"
                labelFor="text-input"
                labelInfo="(required)"
              >
                <InputGroup placeholder="Product name" large />
              </FormGroup>
              <FormGroup
                label="Description"
                labelFor="text-input"
                labelInfo="(required)"
              >
                <TextArea placeholder="Description" large fill />
              </FormGroup>
              <FormGroup
                label="Price"
                labelFor="number-input"
                labelInfo="(required)"
              >
                <NumericInput placeholder="Price in EUR" large fill min={0} />
              </FormGroup>
              <FormGroup
                label="Category"
                labelFor="number-input"
                labelInfo="(required)"
              >
                <NumericInput placeholder="Category" large fill min={0} />
              </FormGroup>
              <FormGroup
                label="Supplier"
                labelFor="number-input"
                labelInfo="(required)"
              >
                <NumericInput placeholder="Supplier" large fill min={0} />
              </FormGroup>
              <Button text="Create" intent="primary" fill type="submit" />
            </Card>
          </CardWrapper>
        </Flex>
      </Wrapper>
    </>
  );
};
