import { useState } from "react";

export default function useMyFunctions(e) {
  const [value, setValue] = useState(e.value);
  const [visible, setVisible] = useState(true);

  return {
    value,
    visible,

    sumValue: (e) => {
      console.log();
      setValue(value + 1);
      setVisible(false);
    },

    restValue: () => {
      setValue(value - 1);
    }
  };
}
