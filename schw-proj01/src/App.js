import React, { useState } from 'react';
import AddUser from './components/AddUser';
import ListUsers from './components/ListUsers';

export default function App() {
  const [userdata, setUserdata] = useState([]);

  const sendUserDataHandler = (formData) => {
    setUserdata((prevState) => [formData, ...prevState]);
  };

  return (
    <>
      <div>Ituiutaba</div>
      <AddUser sendUserDataHandler={sendUserDataHandler} />
      {/* {console.log(`userdata`, userdata)} */}

      <ListUsers userdata={userdata} />
    </>
  );
}
