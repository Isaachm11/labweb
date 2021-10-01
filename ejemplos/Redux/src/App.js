import "./styles.css";
import useMyFunctions from "./functions/useMyFunctions";
import { Button } from "@material-ui/core";
import MyLabel from "./components/MyLabel";
import { Counter } from "./components/Counter";

export default function App() {
  const { value, visible, sumValue, restValue } = useMyFunctions({
    value: 0
  });

  return (
    <div className="App">
      <label>Valor: {value}</label>
      <br />
      <Button onClick={(e) => sumValue(value)}>+</Button>
      <button onClick={(e) => restValue(value)}>-</button>
      <MyLabel hidden={visible} nuevoValor={value} />

      <Counter />
    </div>
  );
}
