import React from "react";

import CommentBox from 'Components/CommentBox/CommentBox';
import CommentList from 'Components/CommentList/CommentList';

import "App.css";

function App() {
  return (
    <>
      <CommentBox title="Insira o comentário" />
      <CommentList title="Comentários Anteriores" />
    </>  
  );
}

export default App;