import {
  Card,
  Button,
  FormGroup,
  InputGroup,
  TextArea,
  Classes,
  NumericInput,
} from '@blueprintjs/core';
import { useUpdateProduct } from '@queries/products';
import { ChangeEvent, FormEvent, useState } from 'react';
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
};

export const EditProductCard = ({ product }: EditProductCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState(product.name);
  const [description, setDescription] = useState(product.description ?? '');
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category_id);
  const [supplier, setSupplier] = useState(product.supplier_id);
  const updateProduct = useUpdateProduct();

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    updateProduct.mutate({
      id: product.id,
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
      <Button icon="edit" intent="primary" onClick={handleOpen} />
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
                  <Title>Edit Product</Title>
                  <form onSubmit={handleSubmit}>
                    <FormGroup
                      label="Name"
                      labelFor="text-input"
                      labelInfo="(required)"
                    >
                      <InputGroup
                        value={name}
                        placeholder="Product name"
                        large
                        onChange={handleName}
                      />
                    </FormGroup>
                    <FormGroup
                      label="Description"
                      labelFor="text-input"
                      labelInfo="(required)"
                    >
                      <TextArea
                        value={description}
                        placeholder="Description"
                        large
                        fill
                        onChange={handleDescription}
                      />
                    </FormGroup>
                    <FormGroup
                      label="Price"
                      labelFor="number-input"
                      labelInfo="(required)"
                    >
                      <NumericInput
                        value={price}
                        placeholder="Price in EUR"
                        large
                        fill
                        min={0}
                        onValueChange={handlePrice}
                      />
                    </FormGroup>
                    <FormGroup
                      label="Category"
                      labelFor="number-input"
                      labelInfo="(required)"
                    >
                      <NumericInput
                        value={category}
                        placeholder="Category"
                        large
                        fill
                        min={0}
                        onValueChange={handleCategory}
                      />
                    </FormGroup>
                    <FormGroup
                      label="Supplier"
                      labelFor="number-input"
                      labelInfo="(required)"
                    >
                      <NumericInput
                        value={supplier}
                        placeholder="Supplier"
                        large
                        fill
                        min={0}
                        onValueChange={handleSupplier}
                      />
                    </FormGroup>
                    <Button text="Update" intent="primary" fill type="submit" />
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
