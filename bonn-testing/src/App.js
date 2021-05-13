import React, { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('red');
  const [check, setCheck] = useState(false);

  const changeButtonColor = () => {
    const newColor = color === 'red' ? 'blue' : 'red';
    setColor(newColor);
  };
  const handleCheckbox = (e) => {
    // setCheck(!check);
    setCheck(e.target.checked);
  };

  return (
    <div className="App">
      <h2>Testing React</h2>
      <button
        style={{ backgroundColor: !check ? color : 'gray', color: 'white' }}
        disabled={check}
        onClick={changeButtonColor}
      >
        muda pra {color === 'red' ? 'vermelho' : 'azul'}
      </button>
      <div>
        <label htmlFor="checkbox">
          {' '}
          {check ? 'Ativar Botão' : 'Desativar Botão'}
          <input type="checkbox" id="checkbox" onChange={handleCheckbox} />
        </label>
      </div>
    </div>
  );
}

export default App;
