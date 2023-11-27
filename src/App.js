import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Components/Home/Home";
import Form from "./Components/Userform/Form";
import Header from "./Components/Header/Header";

export const DarkmodeContext = createContext();

export const isdark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

let bgColor;
let color;

function App() {
  const [mode, setMode] = useState(isdark);

  if (mode) {
    bgColor = "#1a1a1a";
    color = "#f5f5f5";
  } else {
    bgColor = "#f5f5f5";
    color = "#1a1a1a";
  }
  return (
    <div style={{ backgroundColor: bgColor, color: color }}>
      <DarkmodeContext.Provider value={[mode, setMode]}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup/" component={Form} />
          </Switch>
        </BrowserRouter>
      </DarkmodeContext.Provider>
    </div>
  );
}

export default App;
