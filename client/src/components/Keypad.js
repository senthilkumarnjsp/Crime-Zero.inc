import React from "react";

const Keypad = ({
  inputString,
  setInput,
  enableButtons,
  disable,
  disabledKeys,
}) => {
  // {Keypad values}
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
          {/* {Readonly input field to display the input} */}
          <input
            type="text"
            className="input-field"
            placeholder="Input will be shown here"
            readOnly
            value={inputString}
          />
          {/* {Icon to clear input that was provided earlier} */}
          {inputString && (
            <i onClick={() => setInput()} className="icon">
              &times;
            </i>
          )}
        </div>
        <div className="numpad">
          {/* {Method to render keypad with disabled keys} */}
          {Object.keys(keyboard).map((keyValue, index) => {
            return (
              <React.Fragment key={index}>
                {!(index % 3) && <br />}
                <button
                  className="number-key"
                  disabled={
                    disabledKeys.includes(
                      !isNaN(+keyValue) ? +keyValue : keyValue
                    )
                      ? true
                      : false
                  }
                  onClick={() => {
                    enableButtons(!isNaN(+keyValue) ? +keyValue : keyValue);
                  }}
                >
                  <strong style={{ fontSize: 25 }}>
                    {!isNaN(+keyValue) ? +keyValue : keyValue}
                  </strong>
                  <p>{keyboard[keyValue]}</p>
                </button>
              </React.Fragment>
            );
          })}
          {/* {Instructions to the end user} */}
          <p
            style={{
              display: disable ? "block" : "none",
              border: "2px solid saddlebrown",
              maxWidth: 280,
              color: "azure",
              margin: "auto",
              padding: 5,
            }}
          >
            Press key '0' and then '#' to enable other keys
          </p>
        </div>
      </div>
    </>
  );
};

export default Keypad;
