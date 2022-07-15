/** Card to create new products. */
import {
  Card,
  Button,
  FormGroup,
  InputGroup,
  NumericInput,
  TextArea,
  Classes,
} from '@blueprintjs/core';
import { ChangeEvent, FormEvent, useState } from 'react';
import { useCreateProduct } from '@queries/products';
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
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState(0);
  const [supplier, setSupplier] = useState(0);
  const createProduct = useCreateProduct();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    createProduct.mutate({
      name: name,
      description: description,
      price: price,
      category_id: category,
      supplier_id: supplier,
    });
    handleClose();
  };

  const handleName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setDescription(event.target.value);
  };

  const handlePrice = (valueAsNumber: number) => {
    setPrice(valueAsNumber);
  };

  const handleCategory = (valueAsNumber: number) => {
    setCategory(valueAsNumber);
  };

  const handleSupplier = (valueAsNumber: number) => {
    setSupplier(valueAsNumber);
  };

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
              <form onSubmit={handleSubmit}>
                <FormGroup
                  label="Name"
                  labelFor="text-input"
                  labelInfo="(required)"
                >
                  <InputGroup
                    placeholder="Product name"
                    large
                    value={name}
                    onChange={handleName}
                  />
                </FormGroup>
                <FormGroup
                  label="Description"
                  labelFor="text-input"
                  labelInfo="(required)"
                >
                  <TextArea
                    placeholder="Description"
                    large
                    fill
                    value={description}
                    onChange={handleDescription}
                  />
                </FormGroup>
                <FormGroup
                  label="Price"
                  labelFor="number-input"
                  labelInfo="(required)"
                >
                  <NumericInput
                    placeholder="Price in EUR"
                    large
                    fill
                    min={0}
                    value={price}
                    onValueChange={handlePrice}
                  />
                </FormGroup>
                <FormGroup
                  label="Category"
                  labelFor="number-input"
                  labelInfo="(required)"
                >
                  <NumericInput
                    placeholder="Category"
                    large
                    fill
                    min={0}
                    value={category}
                    onValueChange={handleCategory}
                  />
                </FormGroup>
                <FormGroup
                  label="Supplier"
                  labelFor="number-input"
                  labelInfo="(required)"
                >
                  <NumericInput
                    placeholder="Supplier"
                    large
                    fill
                    min={0}
                    value={supplier}
                    onValueChange={handleSupplier}
                  />
                </FormGroup>
                <Button text="Create" intent="primary" fill type="submit" />
              </form>
            </Card>
          </CardWrapper>
        </Flex>
      </Wrapper>
    </>
  );
};
