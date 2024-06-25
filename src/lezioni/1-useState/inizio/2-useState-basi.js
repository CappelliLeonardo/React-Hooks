import React, { useState } from "react";
// Tutti gli HOOKS devono iniziare con use davanti
// Il componente in cui viene utilizzato l'hook DEVE AVERE LA PRIMA LETTERE MAIUSC
// Gli Hook devono essere invocati all'interno del corpo/funzione del componente
// Gli Hook non possono essere utilizzati in maniera condizionale(per esempio negli IF else)

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
