/** The footer of the application. */
import { Classes, Icon } from '@blueprintjs/core';
import { Foo, Wrapper, Copyright } from './styles';

export const Footer = () => {
  return (
    <Foo>
      <Wrapper>
        <Copyright className={Classes.TEXT_MUTED}>
          Copyright © 2022 404, Inc. All rights reserved.
        </Copyright>
        <a
          href="https://github.com/Andre-Gilbert/Database"
          className={Classes.TEXT_MUTED}
        >
          <Icon icon="git-repo" />
        </a>
      </Wrapper>
    </Foo>
  );
};
