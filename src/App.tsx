import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./Msh";
import ListGroup from "./components/ListGroup/ListGroup";
import Bugfix from "./components/Bug/Bugfix";
import Expandable from "./components/Expandable/Expandable";
import { BasicForm } from "./components/forms/BasicForm";
import ReactHookForms from "./components/forms/ReactHookForms";

// uncontrolled state or render behaviour

const items = ["lorem10", "jsfvksdjv", "Dsdffdsbvf"];

function App() {
  const [activeRow, setActiveRow] = useState(0);
  const [alert, setAlert] = useState(false);
  // const { items } = props;
  let count = 0;
  console.log("handlebefore", activeRow, "count", count);
  const handleActive = (index: number) => {
    setActiveRow(index);
    count++;
    items.push(items[index] + index);
    console.log("handle", activeRow, "count", count, items);
  };
  console.log("outside", activeRow, "count", count);

  const handleAlert = () => setAlert(!alert);

  return (
    <div className="App">
      <BasicForm />
      <ReactHookForms />
      <hr />
      <strong>Alert</strong>
      <Message onAlert={handleAlert} alert={alert}>
        Hi <span>hello Darling</span>
      </Message>
      <hr />

      <ListGroup items={items} activeRow={activeRow} onActive={handleActive} />
      <Bugfix />
      <Expandable />
    </div>
  );
}

export default App;
