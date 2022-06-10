import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import * as Breakpoints from '@styles/breakpoints';

export const Wrapper = styled.div`
  margin-bottom: 5rem;
  flex: 0 0 250px;
  display: flex;
  justify-content: center;

  @media (min-width: ${Breakpoints.MD}) {
    flex: 1 1 50%;
    align-items: flex-start;
    margin-top: 5rem;
  }
`;

export const Cube = styled.div`
  display: block;
`;

export const CubeWrapper = styled.div`
  perspective: 800px;
  perspective-origin: 50% 100px;
`;

export const CubeFaces = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
  width: 200px;

  @media (min-width: ${Breakpoints.MD}) {
    width: 300px;
  }

  div {
    width: 200px;
    height: 200px;
    padding: 1rem;
    outline: 1px solid ${({ theme }) => theme.secondary};
    position: absolute;
    opacity: 0.9;
    box-shadow: inset 0px 0px 100px ${({ theme }) => theme.secondary};
    display: grid;
    place-items: center;

    @media (min-width: ${Breakpoints.MD}) {
      width: 300px;
      height: 300px;
    }
  }
`;

export const CubeFaceFront = styled.div`
  transform: translateZ(100px);
  background: ${({ theme }) => theme.primary};

  @media (min-width: ${Breakpoints.MD}) {
    transform: translateZ(150px);
  }
`;

export const CubeFaceBack = styled.div`
  transform: translateZ(-100px) rotateY(180deg);
  background: ${({ theme }) => theme.primary};

  @media (min-width: ${Breakpoints.MD}) {
    transform: translateZ(-150px) rotateY(180deg);
  }
`;

export const CubeFaceLeft = styled.div`
  transform: rotateY(270deg) translateX(-100px);
  transform-origin: center left;
  background: ${({ theme }) => theme.primary};

  @media (min-width: ${Breakpoints.MD}) {
    transform: rotateY(270deg) translateX(-150px);
  }
`;

export const CubeFaceRight = styled.div`
  transform: rotateY(-270deg) translateX(100px);
  transform-origin: top right;
  background: ${({ theme }) => theme.primary};

  @media (min-width: ${Breakpoints.MD}) {
    transform: rotateY(-270deg) translateX(150px);
  }
`;

export const CubeFaceTop = styled.div`
  transform: rotateX(-90deg) translateY(-100px);
  transform-origin: top center;
  background-color: ${({ theme }) => theme.secondary};

  @media (min-width: ${Breakpoints.MD}) {
    transform: rotateX(-90deg) translateY(-150px);
  }
`;

export const CubeFaceBottom = styled.div`
  transform: rotateX(90deg) translateY(100px);
  transform-origin: bottom center;
  background-color: ${({ theme }) => theme.secondary};

  @media (min-width: ${Breakpoints.MD}) {
    transform: rotateX(90deg) translateY(150px);
  }
`;

export const CubeShadow = styled(motion.div)`
  position: relative;
  width: 200px;
  transform-style: preserve-3d;

  @media (min-width: ${Breakpoints.MD}) {
    width: 300px;
  }

  div {
    width: 200px;
    height: 200px;
    transform: rotateX(90deg) translateY(100px);
    position: absolute;
    top: 0px;
    opacity: 0.98;
    box-shadow: 0px 0px 100px ${({ theme }) => theme.secondary};
    transform-origin: bottom center;

    @media (min-width: ${Breakpoints.MD}) {
      width: 300px;
      height: 300px;
      transform: rotateX(90deg) translateY(150px);
    }
  }
`;
