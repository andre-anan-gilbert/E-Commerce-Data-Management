import { Classes, Card } from '@blueprintjs/core';
import { Section, Title, Subtitle, Flex, CardTitle } from './styles';

export const HomeSection = () => {
  return (
    <Section className={Classes.DARK}>
      <Title>Home</Title>
      <Subtitle>Sales Order</Subtitle>
      <Flex>
        <Card elevation={3} interactive>
          <CardTitle>Manage Products</CardTitle>
        </Card>
        <Card elevation={3} interactive>
          <CardTitle>Manage Sales Order</CardTitle>
        </Card>
        <Card elevation={3} interactive>
          <CardTitle>Manage Customers</CardTitle>
        </Card>

        <Card elevation={3} interactive>
          <CardTitle>Manage Suppliers</CardTitle>
        </Card>
      </Flex>
    </Section>
  );
};
