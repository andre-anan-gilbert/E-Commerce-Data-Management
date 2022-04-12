import styled from 'styled-components';

export const Button = styled.button`
  position: relative;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 0.6rem 1.8rem;
  margin-left: 2rem;

  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2.4rem;

  color: ${({ theme }) => theme.text.light};
  background-color: transparent;

  border: 1px solid ${({ theme }) => theme.text.light};
  border-radius: 0.6rem;
  white-space: nowrap;

  transition: background-color 0.2s, padding 0.4s, box-shadow 0.2s, border 0.2s;
`;
