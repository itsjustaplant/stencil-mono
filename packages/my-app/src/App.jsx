import { useEffect, useState } from "react";
import "./App.css";
import {
  PlantList,
  PlantListItem,
  defineCustomElements,
} from "plants-react-library";

const data = ["a", "b", "c", "d"];

defineCustomElements();
function App() {
  const [state, setState] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setState(data);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  // Dynamic rendering of slotted components fails at patched insertBefore due to faulty injection of slotted element

  // Why it fails? Because stencil tries to insert the mapped elements to the very inner div element with a beforeNode reference as footer slot, but footer is not a child of that div. That's why encapsulating mapped elements with a div resolves this issue.
  return (
    <>
      <PlantList>
        <h1 slot="header">ITEMS</h1>
        {state.map(s => <PlantListItem key={s}><span>{s}</span></PlantListItem>)}
        <span slot="footer">Item Count: {state.length}</span>
      </PlantList>
    </>
  );
}

export default App;
