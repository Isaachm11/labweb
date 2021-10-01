import React from "react";

export default function MyLabel(props) {
  return (
    <div rubens={"d"} hidden={props.hidden}>
      {" "}
      Valor en MyLabel {props.nuevoValor}
    </div>
  );
}
