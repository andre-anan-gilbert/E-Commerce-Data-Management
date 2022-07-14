import { Spinner, SpinnerSize } from '@blueprintjs/core';
import { SpinnerWrapper, Backdrop, Flex } from './styles';

export const Loading = () => {
  return (
    <>
      <Backdrop />
      <SpinnerWrapper>
        <Flex>
          <Spinner size={SpinnerSize.LARGE} />
        </Flex>
      </SpinnerWrapper>
    </>
  );
};
