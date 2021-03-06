import React from 'react';
import styled from 'styled-components';
import CartIcon from '../assets/cart-icon';

export default function ButtonCart() {
  return (
    <Button type="button">
      <IconContainer>
        <CartIcon />
      </IconContainer>
      <span>CART</span>
      <Badge>3</Badge>
    </Button>
  );
}

const Button = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #2c0d00;
  }
`;

const IconContainer = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`;

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;

  &:hover,
  &:active {
    background-color: #92320c;
  }
`;
