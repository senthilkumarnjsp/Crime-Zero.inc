import React from "react";

const Heroes = ({ heroes, clear }) => {
  //   console.log(`Heroes length is ${heroes.length}`);
  return (
    <div className="heroes-group">
      {heroes.length ? (
        heroes.map((hero) => (
          <div key={hero} className="hero-style">
            <h3>{hero}</h3>
          </div>
        ))
      ) : (
        <>
          <h2>
            No hero code matched!
            <br /> Clear input and try again
          </h2>
          <button
            className="number-key"
            onClick={clear}
            style={{ fontSize: 25 }}
          >
            Clear
          </button>
        </>
      )}
    </div>
  );
};

export default Heroes;
