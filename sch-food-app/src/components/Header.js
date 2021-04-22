import React from 'react';
import styled from 'styled-components';
import MealsBanner from '../assets/meals.jpg';
import ButtonCart from '../elements/ButtonCart';

export default function Header() {
  return (
    <>
      <HeaderBar>
        <h1>REACT MEALS</h1>
        <ButtonCart />
      </HeaderBar>
      <ImageContainer>
        <Image src={MealsBanner} alt="Banner com banquete e vários pratos" />
      </ImageContainer>
    </>
  );
}

const HeaderBar = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #8a2b06;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 25rem;
  z-index: 0;
  overflow: hidden;
`;

const Image = styled.img`
  width: 110%;
  height: 100%;
  object-fit: cover;
  transform: rotateZ(-5deg) translateY(-4rem) translateX(-1rem);
`;
