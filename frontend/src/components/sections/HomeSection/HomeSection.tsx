/** Section of the home page.*/
import Link from 'next/link';
import {
  Section,
  Title,
  Subtitle,
  Flex,
  Card,
  CardTitle,
  CardNumberWrapper,
  CardNumber,
} from './styles';
import { Classes } from '@blueprintjs/core';
import { useFetchProducts } from '@queries/products';

export const HomeSection = () => {
  const { data, error, isError, isLoading } = useFetchProducts();

  if (isError) {
    return <div>{!error}</div>;
  }

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
      <Subtitle>Sales Order</Subtitle>
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
        <Link href="/products">
          <Card elevation={3} interactive>
            <CardTitle>Manage Products</CardTitle>
            <CardNumberWrapper className={isLoading ? Classes.SKELETON : ''}>
              <CardNumber>{data?.length}</CardNumber>
            </CardNumberWrapper>
          </Card>
        </Link>
      </Flex>
    </Section>
  );
};
