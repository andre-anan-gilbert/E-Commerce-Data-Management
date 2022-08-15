/** Section of the home page. */
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@images/logo.svg';
import { Button, Classes } from '@blueprintjs/core';
import { useFetchProducts } from '@queries/products';
import {
  Section,
  Header,
  Title,
  ApplicationWrapper,
  Flex,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from './styles';

export const HomeSection = () => {
  const { data, error, isError, isLoading } = useFetchProducts();

  if (isError) {
    return <div>{error?.message}</div>;
  }

  return (
    <Section>
      <Header>
        <Image src={Logo} alt="logo" width="80" height="80" priority />
      </Header>
      <ApplicationWrapper>
        <Title className={Classes.TEXT_MUTED}>Apps</Title>
        <Flex>
          <Card interactive>
            <CardContent>
              <CardHeader>
                <Button icon="people" intent="primary" />
                <CardTitle>Manage Employees</CardTitle>
              </CardHeader>
            </CardContent>
          </Card>
          <Card interactive>
            <CardContent>
              <CardHeader>
                <Button icon="office" intent="primary" />
                <CardTitle>Manage Warehouses</CardTitle>
              </CardHeader>
            </CardContent>
          </Card>
          <Card interactive>
            <CardContent>
              <CardHeader>
                <Button icon="airplane" intent="primary" />
                <CardTitle>Manage Sales Orders</CardTitle>
              </CardHeader>
            </CardContent>
          </Card>
          <Card interactive>
            <CardContent>
              <CardHeader>
                <Button icon="person" intent="primary" />
                <CardTitle>Manage Customers</CardTitle>
              </CardHeader>
            </CardContent>
          </Card>
          <Card interactive>
            <CardContent>
              <CardHeader>
                <Button icon="cargo-ship" intent="primary" />
                <CardTitle>Manage Suppliers</CardTitle>
              </CardHeader>
            </CardContent>
          </Card>
          <Link href="/products">
            <Card interactive>
              <CardContent className={isLoading ? Classes.SKELETON : ''}>
                <CardHeader>
                  <Button icon="shopping-cart" intent="primary" />
                  <CardTitle>Manage Products</CardTitle>
                </CardHeader>
                <CardTitle>{data?.length}</CardTitle>
              </CardContent>
            </Card>
          </Link>
        </Flex>
      </ApplicationWrapper>
    </Section>
  );
};
