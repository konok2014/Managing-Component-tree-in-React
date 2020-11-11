import React, { useState } from "react";

function ToDoItem(props) {
  const [isDone, setDone] = useState(false);
  function marked() {
    setDone((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li style={{ textDecoration: isDone ? "line-through" : "none" }}>
        {props.text}
      </li>
    </div>
  );
}
export default ToDoItem;
