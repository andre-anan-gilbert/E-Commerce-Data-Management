import { Button, Classes, Card } from '@blueprintjs/core';
import { Backdrop, Wrapper, Flex } from './styles';

type SignInCardProps = {
  handleClose: () => void;
};

export const SignInCard = ({ handleClose }: SignInCardProps) => {
  return (
    <>
      <Backdrop />
      <Wrapper>
        <Flex>
          <Card>
            <Button
              className={Classes.ALIGN_RIGHT}
              icon="cross"
              onClick={handleClose}
            />
            <h1>404</h1>
            <h2>Grab a cookie. We won&apos;t post anything anywhere.</h2>
          </Card>
        </Flex>
      </Wrapper>
    </>
  );
};
