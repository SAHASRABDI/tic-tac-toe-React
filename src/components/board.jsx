import React from "react";
import Square from "./square";

//onclick an anonymous fuction with the index of the box is passed as props to the square component
function Board(props) {
  const style = {
    border: "5px solid green",
    borderRadius: "10px",
    width: "500px",
    height: "500px",
    margin: "0 auto",
    display: "grid",
    gridTemplate: "repeat(3,1fr)/repeat(3,1fr)",
  };
  return (
    <div style={style}>
      {props.array.map((arr, i) => (
        <Square key={i} value={arr} onClick={() => props.onClick(i)}></Square>
      ))}
    </div>
  );
}
export default Board;
