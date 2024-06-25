import React, { useState } from "react";

const StateObject = () => {
  //creo un oggetto persona
  const [person, setPerson] = useState({name:'Dario', age: 30, saluto:'Ciao!'});

  //creo funzione per cambiare l'oggetto
  const cambiaSaluto = () => {
    setPerson({
      ...person, age:25,saluto:"Ciao, sono il saluto cambiato"
    })
  }
  return<>
    <div className="item shadow">
      <div className="text-left">
        <h5>{person.name}</h5>
        <h5>{person.age}</h5>
        <h6>{person.saluto}</h6>
      </div>
      <button type="button" className="button" onClick={cambiaSaluto}>
        Clicca qui per cambiare qualcosa
      </button>
    </div>
  </>;
};

export default StateObject;
