import "./App.css";
import React, { useState, useContext, useEffect } from "react";

import Button from "./components/button/button.component";
import FormInput from "./components/form-input/form-input.component";

function App() {
  const [name, setName] = useState("Isaac");
  const [date, setDate] = useState(new Date());
  const [segundos, setSegundos] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [horas, setHoras] = useState(0);
  const [users, setUsers] = useState([{ id: 0, name: "Ruben" }]);

  useEffect(() => {
    let timerID = setInterval(() => {
      if (segundos === 59) {
        if (minutos === 59) {
          setHoras(horas + 1);
          setMinutos(0);
          setSegundos(0);
        } else {
          setMinutos(minutos + 1);
          setSegundos(0);
        }
      } else {
        setSegundos(segundos + 1);
      }

      tick();
    }, 1000);

    return function cleanUp() {
      clearInterval(timerID);
    };
  }, [segundos]);

  const onClick = () => {
    setUsers([...users, { id: users.length, name: name }]);
  };

  const onChange = (event) => {
    setName(event.target.value);
  };

  const tick = () => {
    setDate(new Date());
  };

  return (
    <div>
      <FormInput onChange={onChange} label="Nombre" type="text" required />
      <Button onClick={onClick} url={"#"} type={"button"}>
        Add new user
      </Button>
      <div className="users">
        {users.map((e) => (
          <div>
            {e.id} - {e.name}
          </div>
        ))}
      </div>

      <h1>{date.toLocaleTimeString()}</h1>

      <h1>Reloj</h1>
      <h2>
        {horas} : {minutos} : {segundos}
      </h2>
    </div>
  );
}

export default App;
