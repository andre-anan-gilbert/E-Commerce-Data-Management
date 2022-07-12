import { Card } from '@blueprintjs/core';
import { Section, Title, Subtitle, Flex, CardTitle } from './styles';

export const HomeSection = () => {
  return (
    <Section>
      <Title>Home</Title>
      <Subtitle>Employees, Warehouses</Subtitle>
      <Flex>
        <Card elevation={3} interactive>
          <CardTitle>Manage Employees</CardTitle>
        </Card>
        <Card elevation={3} interactive>
          <CardTitle>Manage Warehouses</CardTitle>
        </Card>
      </Flex>
      <Subtitle style={{ marginTop: '3rem' }}>Sales Order</Subtitle>
      <Flex>
        <Card elevation={3} interactive>
          <CardTitle>Manage Sales Order</CardTitle>
        </Card>
        <Card elevation={3} interactive>
          <CardTitle>Manage Customers</CardTitle>
        </Card>
        <Card elevation={3} interactive>
          <CardTitle>Manage Suppliers</CardTitle>
        </Card>
        <Card elevation={3} interactive>
          <CardTitle>Manage Products</CardTitle>
        </Card>
      </Flex>
    </Section>
  );
};
