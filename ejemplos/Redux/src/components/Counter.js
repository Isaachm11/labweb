import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, increment, incrementAsync } from "../store/counterSlice";

export function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  const [incrementAmount, setIncremetamount] = useState("2");

  return (
    <div style={{ fontSize: 20 }}>
      {console.log(count)}
      Counter: {count.value}{" "}
      <input
        value={incrementAmount}
        onChange={(e) => {
          setIncremetamount(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        {"+ simple"}
      </button>
      <button
        onClick={() => {
          dispatch(incrementAsync(Number(incrementAmount)));
        }}
      >
        + Async
      </button>
    </div>
  );
}
