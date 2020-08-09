import React, { useState, useEffect } from "react";
import Keypad from "./components/Keypad";
import Heroes from "./components/Heroes";

function App() {
  const [heroes, setHeroes] = useState([]);
  let [inputString, setInputString] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  let inputValue = "";

  const fetchData = async (keyed = null) => {
    inputValue = {
      keyed,
    };
    inputString += keyed !== null ? keyed : "";
    setInputString(inputString);
    const result = await fetch("http://localhost:2770/api/fetchList", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });
    const data = await result.json();
    // console.log(data);
    setHeroes(data);
  };

  const clearInput = () => {
    inputString = "";
    setInputString(inputString);
    fetchData();
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Crime Zero.inc</h1>
      </header>
      <Keypad
        inputString={inputString}
        fetchData={fetchData}
        setInput={clearInput}
      />
      <div className="vl"></div>
      <Heroes heroes={heroes} />
    </div>
  );
}

export default App;
