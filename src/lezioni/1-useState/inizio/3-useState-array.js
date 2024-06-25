import React, { useState } from "react";
// importo l'array di oggetti dal file data.js
import { data } from '../../../data';

const ArrayState = () => {
  // abbiamo dichiarato lo useState che come valore iniziale
  // presentava l'array importato data
  const [people, setPeople] = useState(data);
  //console.log(people);

  //dichiariamo un funzione per rimuovere gli items
  const removeItem = (id) =>{
    let newPeople = people.filter( el => el.id !== id);
    setPeople(newPeople);
  }
  return (
    <>
      {
        people.map(el=>{
          const{id, name} = el;
          return(
            <div key={id} className="item shadow">
              <h5>{name}</h5>
              <button type="button" className="button delete" onClick={()=> removeItem(id)}>
                X
              </button>

            </div>
          )
        })
      }
    </>
  );
};

export default ArrayState;
