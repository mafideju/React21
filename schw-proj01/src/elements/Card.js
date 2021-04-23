import React from 'react';
// import styled from 'styled-components';

// const Card = styled.button`
//   display: inline-block;
//   color: palevioletred;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid palevioletred;
//   border-radius: 3px;
//   display: block;
// `;

// const TomatoButton = styled(Card)`
//   color: tomato;
//   border-color: tomato;
// `;

const Card = ({ children }) => <div style={{ padding: '2rem' }}>{children}</div>;

export default Card;
