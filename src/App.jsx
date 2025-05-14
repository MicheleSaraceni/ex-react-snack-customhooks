
//-------------------------------------------------------------------------- Snack 1
/*
import useSwitch from "./useSwitch";

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
  */
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
  const { x, y } = useCustomPointer();

  return (
    <div>
      <h1>Cursore personalizzato con elemento HTML!</h1>
      <div
        style={{
          position: "fixed",
          left: x,
          top: y,
          pointerEvents: "none",
          fontSize: "24px",
          cursor: "none" // Nasconde il cursore nativo
        }}
      >
        🔥
      </div>
    </div>
  );
}








