
//-------------------------------------------------------------------------- Snack 1

/* import useSwitch from "./useSwitch";

export default function App() {

  const [isOn, toggle] = useSwitch();
  console.log(isOn)
  return (
    <div>
      <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toggle}>Cambia Stato</button>
    </div>
  );
} */

//-------------------------------------------------------------------------- Snack 2
/* import useDate from "./useDate";

export default function App() {
  const currentDate = useDate();

  return (
    <div>
      <h1>Data e ora attuali:</h1>
      <p>{currentDate.toLocaleString()}</p>
    </div>
  );
} */
//-------------------------------------------------------------------------- Snack 3
import useCustomPointer from "./useCustomPointer";

export default function App() {
  const customPointer = useCustomPointer("🔥");

  return (
    <div>
      <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
      {customPointer}
    </div>
  );
}








