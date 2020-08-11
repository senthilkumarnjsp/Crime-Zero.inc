import React, { useState, useEffect } from "react";
import Keypad from "./Keypad";
import Heroes from "./Heroes";

const Rescue = (props) => {
  const [heroes, setHeroes] = useState([]);
  let [inputString, setInputString] = useState("");
  const [disable, setDisable] = useState(true);
  // {List of disabled keys}
  let [disabledKeys, setDisabledKeys] = useState([
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    "*",
    "#",
  ]);

  useEffect(() => {
    fetchData();
  }, []);

  let inputValue = "";

  // {Method to fetch heroes list depending on the key stroke}
  const fetchData = async (keyed = null) => {
    inputValue = {
      keyed: keyed === "#" || keyed === "*" ? 0 : keyed,
    };
    if (keyed === "*") {
      inputString += "";
      if (heroes.length === 1) {
        const hero = heroes[0];
        props.match.params.heroForRescue = hero;
        props.history.push(`/${hero}`);
        return;
      } else {
        window.alert(
          `Complete the code and then press * (or) press * when the list has only one`
        );
      }
    } else if (keyed === "#") {
      inputString += " ";
    } else if (keyed !== null) {
      inputString += String(keyed);
    }
    setInputString(inputString);
    // {fetch API to the end point /api/fetchList to retrieve the data}
    const result = await fetch("http://localhost:2770/api/fetchList", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });
    const data = await result.json();
    setHeroes(data);
  };

  // {Method to enable buttons depending on the key strokes}
  const enableButtons = (keyed) => {
    let disabledButtons = [...disabledKeys];
    if (keyed === 0) {
      disabledButtons = disabledButtons.filter((key) => key !== "#");
      disabledButtons.push(keyed);
      setDisabledKeys(() => disabledButtons);
    }
    if (keyed === "#") {
      disabledButtons = disabledButtons.filter(
        (key) => key === keyed || key === 0
      );
      disabledButtons.push(keyed);
      setDisabledKeys(() => disabledButtons);
      setDisable(false);
    }
    fetchData(keyed);
  };

  // {Method to disable the buttons again when clearing inputs}
  const disableButtons = () => {
    let disabledButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, "*", "#"];
    setDisabledKeys(() => disabledButtons);
    setDisable(true);
  };

  // {Method to clear the input}
  const clearInput = () => {
    disableButtons();
    inputString = "";
    setInputString(inputString);
    fetchData();
  };

  return (
    <>
      {/* {Responsible for rendering keypad} */}
      <Keypad
        inputString={inputString}
        setInput={clearInput}
        enableButtons={enableButtons}
        disable={disable}
        disabledKeys={disabledKeys}
      />
      <div className="vl"></div>
      {/* {Responsible for rendering Heroes list} */}
      <Heroes heroes={heroes} clear={clearInput} />
    </>
  );
};

export default Rescue;
