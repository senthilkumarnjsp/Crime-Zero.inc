import React from "react";

const Keypad = ({ inputString, fetchData, setInput }) => {
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

  return (
    <>
      <div className="button-group">
        <div id="input_container">
          <input
            type="text"
            className="input-field"
            readOnly
            value={inputString}
          />
          {inputString && (
            <i onClick={() => setInput("")} className="icon">
              &times;
            </i>
          )}
        </div>
        {Object.keys(keyboard).map((keyValue, index) => {
          return (
            <React.Fragment key={index}>
              {!(index % 3) && <br />}
              <button
                className="number-key"
                onClick={() => fetchData(+keyValue)}
              >
                <strong style={{ fontSize: 25 }}>
                  {!isNaN(+keyValue) ? +keyValue : keyValue}
                </strong>
                <p>{keyboard[keyValue]}</p>
              </button>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
};

export default Keypad;
