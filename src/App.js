import { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Box from "./Box";

function App() {
  const count = useSelector((state) => state.count);
  //useSelector : 적용된 state값을 현재 컴포넌트에 적용하기
  const dispatch = useDispatch();

  function increase() {
    dispatch({ type: "DECREMENT", payload: { num: 10 } }); //dispatch로 action 날리기
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increase}>감소!!!!</button>
      <Box />
    </div>
  );
}

export default App;
