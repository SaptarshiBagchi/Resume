import "./App.css";
import { useState, useRef, useEffect } from "react";
import Profile from "./Components/Profile/Profile";
import NoCommand from "./Components/NoCommand/NoCommand";
import Help from "./Components/Help/Help";
import Echo from "./Components/Echo/Echo";
import Education from "./Components/Education/Education";
import CommandsList from "./Components/CommandsList";
import ScrollToBottom from "react-scroll-to-bottom";
import Projects from "./Components/Projects/Projects";
import RenderComponent from "./Components/RenderComponent";

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
    var component = { prependText: prependText, input: input };
    if (input.includes(" ") || CommandsList.includes(input.toUpperCase())) {
      var newString = input + " ";
      var resultantArray = newString.split(" ");
      if (resultantArray.length > 0) {
        if (resultantArray[0].toUpperCase() === "ECHO") {
          component = {
            ...component,
            component: <Echo resultantArray={resultantArray} />,
          };
        } else {
          component = component = {
            ...component,
            component: <NoCommand commandName={resultantArray[0]} />,
          };
        }
      }
    }
    //this is for the rest of the commands
    else if (input.toUpperCase() === "PROFILE") {
      component = {
        ...component,
        component: <Profile />,
      };
    } else if (input.toUpperCase() === "HELP") {
      component = { ...component, component: <Help /> };
    } else if (
      input.toUpperCase() === "CLEAR" ||
      input.toUpperCase() === "CLRSCR"
    ) {
      setDivs([]);
      return;
    } else if (input.toUpperCase() === "EDUCATION") {
      component = { ...component, component: <Education /> };
    } else if (input.toUpperCase() === "PROJECTS") {
      component = { ...component, component: <Projects /> };
    } else {
      component = {
        ...component,
        component: <NoCommand commandName={input} />,
      };
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
            if (index == divs.length - 1) {
              return (
                <RenderComponent
                  scroll={true}
                  prependText={child.prependText}
                  input={child.input}
                  component={child.component}
                />
              );
            } else
              return (
                <RenderComponent
                  scroll={false}
                  prependText={child.prependText}
                  input={child.input}
                  component={child.component}
                />
              );
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
          onChange={(event) => {
            //  console.log("on change is evoking");
            setInput(event.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              renderCommand();
              //lastRef.current.scrollIntoView();
              focusTextInput();

              setInput("");
            }
          }}
        ></input>
      </div>
    </div>
  );
}

export default App;
