import "./App.css";
import { useState, useRef } from "react";
import Profile from "./Components/Profile/Profile";
import NoCommand from "./Components/NoCommand/NoCommand";
import Help from "./Components/Help/Help";
import Echo from "./Components/Echo/Echo";
import Education from "./Components/Education/Education";
import CommandsList from "./Components/CommandsList";

function App() {
  const [input, setInput] = useState("");
  const textInput = useRef();
  const [divs, setDivs] = useState([]);
  const prependText = "localhost:\\Saptarshi>";

  //focussing the text
  function focusTextInput() {
    textInput.current.focus();
  }

  function renderCommand() {
    var component = "";

    //this is for the commands list
    if (input.includes(" ") || CommandsList.includes(input.toUpperCase())) {
      var newString = input + " ";
      var resultantArray = newString.split(" ");
      if (resultantArray.length > 0) {
        if (resultantArray[0].toUpperCase() === "ECHO") {
          component = (
            <div className="commandDisplay">
              <p>
                {prependText}
                {input}
                <Echo resultantArray={resultantArray} />
              </p>
            </div>
          );
        } else {
          component = (
            <div className="commandDisplay">
              <p>
                {prependText}
                {input}
                <NoCommand commandName={resultantArray[0]} />
              </p>
            </div>
          );
        }
      }
    }
    //this is for the rest of the commands
    else if (input.toUpperCase() === "PROFILE") {
      component = (
        <div className="commandDisplay">
          <p>
            {prependText}
            {input}
            <Profile />
          </p>
        </div>
      );
    } else if (input.toUpperCase() === "HELP") {
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
      input.toUpperCase() === "CLEAR" ||
      input.toUpperCase() === "CLRSCR"
    ) {
      setDivs([]);
      return;
    } else if (input.toUpperCase() === "EDUCATION") {
      component = (
        <div className="commandDisplay">
          <p>
            {prependText}
            {input}
            <Education />
          </p>
        </div>
      );
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
          divs.map((child, index) => {
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
