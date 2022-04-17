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

export const CubeAnimation = () => {
  return (
    <Wrapper>
      <Cube>
        <CubeWrapper>
          <CubeShadow>
            <div>&nbsp;</div>
          </CubeShadow>
        </CubeWrapper>
        <CubeWrapper>
          <CubeFaces>
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
