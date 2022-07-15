/** The cube spinning animation of the tech overview section. */
import Image from 'next/image';
import NextJS from '@images/nextjs.svg';
import FastAPI from '@images/fastapi.svg';
import PostgreSQL from '@images/postgresql.svg';
import Docker from '@images/docker.webp';
import {
  Wrapper,
  Cube,
  CubeWrapper,
  CubeShadow,
  CubeFaces,
  CubeFaceFront,
  CubeFaceBack,
  CubeFaceLeft,
  CubeFaceRight,
  CubeFaceTop,
  CubeFaceBottom,
} from './styles';

const ANIMATION = {
  rotateY: 360,
  repeat: Infinity,
  duration: 45,
  ease: 'linear',
};

export const CubeAnimation = () => {
  return (
    <Wrapper>
      <Cube>
        <CubeWrapper>
          <CubeShadow
            whileInView={{ rotateY: ANIMATION.rotateY }}
            transition={{
              repeat: ANIMATION.repeat,
              duration: ANIMATION.duration,
              ease: ANIMATION.ease,
            }}
          >
            <div>&nbsp;</div>
          </CubeShadow>
        </CubeWrapper>
        <CubeWrapper>
          <CubeFaces
            whileInView={{ rotateY: ANIMATION.rotateY }}
            transition={{
              repeat: ANIMATION.repeat,
              duration: ANIMATION.duration,
              ease: ANIMATION.ease,
            }}
          >
            <CubeFaceFront>
              <Image src={NextJS} alt="Next.js" />
            </CubeFaceFront>
            <CubeFaceBack>
              <Image src={PostgreSQL} alt="PostgreSQL" />
            </CubeFaceBack>
            <CubeFaceTop>
              <div>&nbsp;</div>
            </CubeFaceTop>
            <CubeFaceBottom>
              <div>&nbsp;</div>
            </CubeFaceBottom>
            <CubeFaceLeft>
              <Image src={FastAPI} alt="FastAPI" />
            </CubeFaceLeft>
            <CubeFaceRight>
              <Image src={Docker} alt="Docker" />
            </CubeFaceRight>
          </CubeFaces>
        </CubeWrapper>
      </Cube>
    </Wrapper>
  );
};
