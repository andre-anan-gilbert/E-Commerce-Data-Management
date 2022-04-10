/** The footer of the application. */
import styled from 'styled-components';
import { Classes, Icon } from '@blueprintjs/core';

export const Footer = () => {
  return (
    <Foo>
      <Copyright className={Classes.TEXT_MUTED}>
        Copyright © 2022 404, Inc. All rights reserved.
      </Copyright>
      <a
        href="https://github.com/Andre-Gilbert/Database"
        className={Classes.TEXT_MUTED}
      >
        <Icon icon="git-repo" />
      </a>
    </Foo>
  );
};

const Foo = styled.div`
  width: min(100%, 120rem);
  min-height: 5rem;
  margin-inline: auto;
  padding: 0 1.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f7f9;
`;

const Copyright = styled.p`
  margin: 0;
`;
