/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function ListUsers({ userdata }) {
  console.log(`ListUsers`, userdata);

  // const listAllUsers = () => {
  //   return (prevState) => ({ prevState, user })
  // }

  return (
    <ol>
      {userdata.map((user) => (
        <li>
          <h2>{user.username}</h2>
          <h3>{user.age}</h3>
        </li>
      ))}
    </ol>
  );
}
