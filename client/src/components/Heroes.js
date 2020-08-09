import React from "react";

const Heroes = ({ heroes }) => {
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
        <h2>
          No hero code matched!
          <br /> Clear input and try again
        </h2>
      )}
    </div>
  );
};

export default Heroes;
