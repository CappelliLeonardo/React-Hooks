import React, { useState } from "react";
// Gli Hooks devono essere usati con use davanti
// componenti devono avere la prima lettere Maiuscola
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale

const UsoBase = () => {
  //destrutturazione della funzione log
  //const {log} = console;
  //log(useState("Hello World!!"));

  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const [titolo, setTitolo] = useState('Hello World!!');
  const cambiaTitolo = () => {
    if (titolo === "Hello World!!"){
      setTitolo('Il Titolo è stato cambiato')
    }else{
      setTitolo('Hello World!!')
    }
  }
  return (
    <>
      <h2> {titolo}</h2>
      <button type= 'button' className = 'btn btn-info shadow my-5' onClick={cambiaTitolo}>
        Change me 
      </button>
    </>
  );
};

export default UsoBase;
