import "./App.css";
import { useState, useRef } from "react";
import Profile from "./Components/Profile/Profile";
import NoCommand from "./Components/NoCommand/NoCommand";
import Help from "./Components/Help/Help";

function App() {
  const [input, setInput] = useState("");
  const textInput = useRef();
  const [divs, setDivs] = useState([]);

  const prependText = "localhost:\\Saptarshi\\Terminal>";

  function focusTextInput() {
    textInput.current.focus();
  }

  function renderCommand() {
    var component = "";
    if (input.toUpperCase() == "PROFILE") {
      component = (
        <div className="commandDisplay">
          <p>
            {prependText}
            {input}
            <Profile />
          </p>
        </div>
      );
    } else if (input.toUpperCase() == "HELP") {
      component = (
        <div className="commandDisplay">
          <p>
            {prependText}
            {input}
            <Help />
          </p>
        </div>
      );
    } else if (
      input.toUpperCase() == "CLEAR" ||
      input.toUpperCase() == "CLRSCR"
    ) {
      setDivs([]);
      return;
    } else {
      component = (
        <div className="commandDisplay">
          <p>
            {prependText}
            {input}
            <NoCommand commandName={input} />
          </p>
        </div>
      );
    }
    setDivs([...divs, component]);
  }

  return (
    <div className="App" onClick={focusTextInput}>
      <p>Saptarshi Bagchi Resume [Version 1.0.0]</p>
      <p>(c) 2021 Saptarshi Bagchi. All rights reserved.</p>
      <p>Type help to see a list of possible commands</p>
      <div>
        {divs.length > 0 &&
          divs.map(child => {
            return child;
          })}
      </div>
      <div className="inputContainer">
        <p> {prependText}</p>
        <input
          type="text"
          value={input}
          ref={textInput}
          autoFocus
          className="commandstyle"
          onChange={event => {
            //  console.log("on change is evoking");
            setInput(event.target.value);
          }}
          onKeyDown={event => {
            if (event.key === "Enter") {
              renderCommand();
              setInput("");
              focusTextInput();
            }
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
