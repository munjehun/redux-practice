import React from "react";
import { useSelector } from "react-redux";

function Box() {
  const count = useSelector((state) => state.count);
  return <div>Box {count}</div>;
}

export default Box;
