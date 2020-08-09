import React, { useState, useEffect } from "react";

const Keypad = () => {
  const [heroes, setHeroes] = useState([]);
  let [inputString, setInputString] = useState("");

  useEffect(() => {
    console.log(`Application is running`);
    fetchData();
  }, []);

  const keyboard = {
    "+1": "@.?",
    "+2": "ABC",
    "+3": "DEF",
    "+4": "GHI",
    "+5": "JKL",
    "+6": "MNO",
    "+7": "PQRS",
    "+8": "TUV",
    "+9": "WXYZ",
    "*": "send",
    "+0": "Zero",
    "#": "space",
  };

  let inputValue = "";

  const fetchData = async (keyed = null) => {
    inputValue = {
      keyed,
    };
    inputString += keyed !== null ? keyed : "";
    setInputString(inputString);
    console.log(`U have pressed ${keyed}`);
    console.log(JSON.stringify(inputValue));
    const result = await fetch("http://localhost:2770/api/fetchList", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputValue),
    });
    const data = await result.json();
    console.log(data);
    setHeroes(data);
  };

  return (
    <>
      <input type="text" readOnly value={inputString} />
      <div className="button-group">
        {Object.keys(keyboard).map((keyValue, index) => {
          return (
            <React.Fragment key={index}>
              {!(index % 3) && <br />}
              <button onClick={() => fetchData(+keyValue)}>
                {!isNaN(+keyValue) ? +keyValue : keyValue}
                <p>{keyboard[keyValue]}</p>
              </button>
            </React.Fragment>
          );
        })}
      </div>
      {heroes.length && heroes.map((hero) => <h1 key={hero}>{hero}</h1>)}
    </>
  );
};

export default Keypad;
