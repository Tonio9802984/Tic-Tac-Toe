import "./App.css";
import { useState } from "react";
// react provide a useStatefunction that we can call from our component to let it "remember things"

function Square() {
  const [value, setValue] = useState(null); // value stores the value and setValue is a function that can be used to change the value.
  // the null passed to useState is used a initial value
  // we use {} to escape from JSX to JS
  function handleClik() {
    console.log("clicked");
  }
  return (
    <button className="square" onClick={handleClik}>
      {value}
    </button>
  );
}

//using "props" we gonna pass the value from each square from the parent component (Board) to its child (Square)
export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square value="1" />
        <Square value="2" />
        <Square value="3" />
      </div>
      <div className="board-row">
        <Square value="4" />
        <Square value="5" />
        <Square value="6" />
      </div>
      <div className="board-row">
        <Square value="7" />
        <Square value="8" />
        <Square value="9" />
      </div>
    </>
  );
}

// "default" tell to other files that is the main function in the file
// <button> jsx element combinantion of JS and html
// we use <></> to wrap element cause  React component need to return a single JSX element
