/** Product page section. */
import { useState } from 'react';
import { ProductsCard } from '@cards/ProductsCard/ProductsCard';
import { CreateProductCard } from '@cards/CreateProductCard/CreateProductCard';
import { Button } from '@blueprintjs/core';
import {
  Section,
  Header,
  HeaderContent,
  Title,
  Subtitle,
  ApplicationWrapper,
} from './styles';

export const ProductsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Section>
      <Header>
        <HeaderContent>
          <Title>Explore your products</Title>
          <Subtitle>are a space to</Subtitle>
        </HeaderContent>
      </Header>
      <ApplicationWrapper>
        <Button text="Create" intent="primary" onClick={handleOpen} />
        <ProductsCard />
        {isOpen && <CreateProductCard handleClose={handleClose} />}
      </ApplicationWrapper>
    </Section>
  );
};
