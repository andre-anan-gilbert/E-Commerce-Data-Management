import styled from 'styled-components';

export const Foo = styled.div`
  width: 100%;
  padding-inline: 1.2rem;
  background-color: ${({ theme }) => theme.text.light};
`;

export const Wrapper = styled.div`
  width: min(100%, 120rem);
  min-height: 5rem;
  margin-inline: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Copyright = styled.p`
  margin: 0;
`;
