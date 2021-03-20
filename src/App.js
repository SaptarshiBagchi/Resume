import "./App.css";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const [divs, setDivs] = useState([]);

  function renderCommand() {
    console.log(`This method is getting invoked`);
    var component = "";
    if (input.toUpperCase() == "RESUME") {
      component = (
        <div className="commandDisplay">
          <p>
            localhost\Saptarshi\Terminal{">"}
            Resume should be displayed
          </p>
        </div>
      );
    } else if (input.toUpperCase() == "HELP") {
      component = (
        <div className="commandDisplay">
          <p>
            localhost\Saptarshi\Terminal{">"}
            Help should be displayed
          </p>
        </div>
      );
    } else {
      component = (
        <div className="commandDisplay">
          <p>
            localhost\Saptarshi\Terminal{">"}
            Input not recognised
          </p>
        </div>
      );
    }
    setDivs([...divs, component]);

    setInput("");
  }

  return (
    <div className="App">
      <div>
        {divs.length > 0 &&
          divs.map(child => {
            return child;
          })}
      </div>
      <div className="inputContainer">
        <p>localhost\Saptarshi\Terminal{">"}</p>
        <input
          type="text"
          value={input}
          className="commandstyle"
          onChange={event => {
            //  console.log("on change is evoking");
            setInput(event.target.value);
          }}
          onKeyDown={event => {
            if (event.key === "Enter") {
              renderCommand();
            }
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
