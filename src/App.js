import { useState } from 'react';
import './App.css';

function App() {

  /* let numero = 0; */
  const [numero, setNumero] = useState(5);
  //! [nombreVariable, setNombreVariable] = useState(ValorInicial);

  console.log("SOY APP Y ME RENDERIZO");

  const restar = () => {
    /* numero--; */
    /* numero = numero - 1 */
    setNumero(numero - 1);
    /* console.log(numero); */
  }

  const sumar = () => {
    /* numero++; */
    setNumero(numero + 1);
    /* console.log(numero); */
  }

  return (
    <div className="App">
      <button onClick={restar}>-</button>
      {numero}
      {numero === 7 ? <p>MI NUMERO ES siete</p> : <p>MI NUMERO NO ES siete</p>}
      <button onClick={sumar}>+</button>
    </div>
  );
}

export default App;
