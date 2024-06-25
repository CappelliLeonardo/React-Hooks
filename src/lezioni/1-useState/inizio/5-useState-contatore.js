import React, {useState} from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);
  const reset = () => setContatore(0);
  const aumenta = () => {
    setContatore((oldValue)=>{
      if (oldValue + 1 === 11){
        return oldValue;
      }else{
        return oldValue +1;
      }
    }
    )
  }
  return (

    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3">
      <h3>{contatore}</h3>
      <div className="d-flex justify-content-between">
        <button type="button" className="button my-2" onClick={()=>setContatore(contatore-1)}> Diminuisci</button>
        <button type="button" className="button my-2" onClick={aumenta}> Aumenta</button>
      </div>
      <button type="button" className=" button reset-button my-2" onClick={reset}> Resetta</button>

    </div>
  );
};

export default CounterComponent;
