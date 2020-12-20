import React from "react";

import CommentBox from './Components/CommentBox/CommentBox';
import CommentList from './Components/CommentList/CommentList';

import "./App.css";

function App() {
  return (
    <div>
      <CommentBox title="Insira o comentário" />
      <CommentList title="Comentários Anteriores" />
    </div>  
  );
}

export default App;