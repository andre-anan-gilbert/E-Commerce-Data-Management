import styled from 'styled-components';
import { H1, H3 } from '@blueprintjs/core';
import * as Breakpoints from '@styles/breakpoints';

export const Flex = styled.div`
  display: block;

  @media (min-width: ${Breakpoints.LG}) {
    height: 100%;
    display: flex;
    grid-gap: 10rem;
    justify-content: center;
    align-items: center;
  }
`;

export const TextWrapper = styled.div`
  padding-top: 15rem;
  color: ${({ theme }) => theme.text.light};

  @media (min-width: ${Breakpoints.LG}) {
    flex: 1 1 50%;
    padding-top: 0;
    padding-left: 2rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding-inline: 0.8rem;
  width: min(100%, 50rem);
  transition: margin 0.4s;
  margin-inline: auto;

  @media (min-width: ${Breakpoints.LG}) {
    margin: 0 0 0 auto;
  }
`;

export const Title = styled(H1)`
  margin: 0;
  text-align: center;

  @media (min-width: ${Breakpoints.LG}) {
    text-align: left;
  }
`;

export const Subtitle = styled(H3)`
  margin: 0;
  text-align: center;
  color: ${({ theme }) => theme.text.muted};

  @media (min-width: ${Breakpoints.LG}) {
    text-align: left;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin-inline: auto;
  z-index: 10;

  @media (min-width: ${Breakpoints.LG}) {
    margin-inline: 0;
  }
`;

export const ImageWrapper = styled.div`
  margin-top: 7.5rem;
  margin-inline: 1.2rem;

  @media (min-width: ${Breakpoints.SM}) {
    width: min(100%, 50rem);
    margin-inline: auto;
  }

  @media (min-width: ${Breakpoints.LG}) {
    flex: 1 1 50%;
    display: flex;
    align-items: flex-end;
    margin-top: 0;
    margin-inline: 0;
    margin-right: 1.2rem;
    width: 100rem;
    height: 90rem;
  }
`;

export const ImageApp = styled.div`
  position: relative;
  width: 100%;
  filter: drop-shadow(0 10px 20px rgb(49, 34, 147, 0.25));
`;

export const ImageAppSection = styled.div`
  position: absolute;
  bottom: 0;
  width: 80%;
  filter: drop-shadow(0 10px 20px rgb(213, 110, 229, 0.15));
`;

export const Spacing = styled.div`
  width: 1.6rem;
`;
