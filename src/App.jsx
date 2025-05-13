
/* 
Ritorna il valore attuale e una funzione toggle() per cambiarlo.
Quando toggle() viene chiamato, il valore passa da true → false e viceversa.
Esempio di utilizzo:*/

import useSwitch from "./assets/useSwitch";

export default function App() {
  const [isOn, toggle] = useSwitch();
  console.log(isOn)
  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
}



