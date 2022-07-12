import { useState } from 'react';
import { Navbar, NavbarGroup, Button, Alignment } from '@blueprintjs/core';
import { Section, Title } from './styles';
import { ProductsCard } from '@cards/ProductsCard/ProductsCard';
import { CreateProductCard } from '@cards/CreateProductCard/CreateProductCard';

export const ProductsSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);

  const handleClose = () => setIsOpen(false);

  return (
    <Section>
      <Title>Products</Title>
      <Navbar>
        <NavbarGroup>
          <Button text="List" icon="list" minimal />
          <Button text="Group by Category" icon="grid-view" minimal />
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>
          <Button text="Create" intent="primary" onClick={handleOpen} />
        </NavbarGroup>
      </Navbar>
      <ProductsCard />
      {isOpen && <CreateProductCard handleClose={handleClose} />}
    </Section>
  );
};
