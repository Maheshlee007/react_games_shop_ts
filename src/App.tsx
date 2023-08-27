import { useState } from "react";
import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
//local comps
import Message from "./Msh";
import ListGroup from "./components/ListGroup/ListGroup";
import Bugfix from "./components/Bug/Bugfix";
import Expandable from "./components/Expandable/Expandable";
import { BasicForm } from "./components/forms/BasicForm";
import ReactHookForms from "./components/forms/ReactHookForms";
import Navbar from "./components/Navbar";

//css
import "./App.css";
// uncontrolled state or render behaviour

const items = ["lorem10", "jsfvksdjv", "Dsdffdsbvf"];

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'nav'  "main"`,
        lg: `'nav nav' "aside main"`,
      }}
    >
      <GridItem area="nav" bg="coral">
        <Navbar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="gold">
          side bar
        </GridItem>
      </Show>
      <GridItem area="main" bg="lightblue">
        main games grid
      </GridItem>
      {/* <Learning /> */}
    </Grid>
  );
}

export default App;

const Learning = () => {
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
    <>
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
    </>
  );
};
