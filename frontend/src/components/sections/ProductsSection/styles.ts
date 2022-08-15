import styled from 'styled-components';
import { Colors, H1 } from '@blueprintjs/core';

export const Section = styled.div`
  margin-inline: auto;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 1rem;
  background-color: ${Colors.DARK_GRAY3};
`;

export const ApplicationWrapper = styled.div`
  padding: 5rem 1rem 50rem;
  margin-inline: auto;
`;

export const HeaderContent = styled.div`
  width: min(100%, 160rem);
  margin-inline: auto;
`;

export const Title = styled(H1)`
  margin-bottom: 2rem;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  margin: 0;
`;
