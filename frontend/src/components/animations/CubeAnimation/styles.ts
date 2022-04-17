import styled, { keyframes } from 'styled-components';
import { TABLET } from '@styles/breakpoints';

export const Wrapper = styled.div`
  margin-bottom: 5rem;
  flex: 0 0 250px;
  display: flex;
  justify-content: center;

  @media (min-width: ${TABLET}) {
    flex: 1 1 50%;
    align-items: center;
  }
`;

export const Cube = styled.div`
  display: block;
`;

export const CubeWrapper = styled.div`
  perspective: 800px;
  perspective-origin: 50% 100px;
`;

const spin = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(360deg);
  }
`;

export const CubeFaces = styled.div`
  position: relative;
  transform-style: preserve-3d;
  width: 200px;
  animation: ${spin} 45s infinite linear;

  div {
    width: 200px;
    height: 200px;
    padding: 1rem;
    outline: 1px solid #02203c;
    position: absolute;
    opacity: 0.8;
    box-shadow: inset 0px 0px 100px #02203c;
    display: grid;
    place-items: center;
  }
`;

export const CubeFaceFront = styled.div`
  transform: translateZ(100px);
  background-color: #3e526a;
`;

export const CubeFaceBack = styled.div`
  transform: translateZ(-100px) rotateY(180deg);
  background-color: #3e526a;
`;

export const CubeFaceLeft = styled.div`
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
  background-color: #3e526a;
`;

export const CubeFaceRight = styled.div`
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
  background-color: #3e526a;
`;

export const CubeFaceTop = styled.div`
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;
  background-color: #02203c;
`;

export const CubeFaceBottom = styled.div`
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;
  background-color: #02203c;
`;

export const CubeShadow = styled.div`
  position: relative;
  width: 200px;
  transform-style: preserve-3d;
  animation: ${spin} 45s infinite linear;

  div {
    width: 200px;
    height: 200px;
    transform: rotateX(90deg) translateY(100px);
    position: absolute;
    top: 0px;
    opacity: 0.98;
    box-shadow: 0px 0px 100px #000;
    transform-origin: bottom center;
  }
`;
