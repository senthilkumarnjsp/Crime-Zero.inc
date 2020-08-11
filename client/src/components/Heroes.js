import React from "react";
import { withRouter } from "react-router-dom";

const Heroes = ({ heroes, clear, ...props }) => {
  const callHero = (hero) => {
    props.match.params.heroForRescue = hero;
    props.history.push(`/${hero}`);
  };

  return (
    <div className="heroes-group">
      {heroes.length ? (
        heroes.map((hero) => (
          <div
            key={hero}
            onClick={() => callHero(hero)}
            className="heroes-style"
          >
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

export default withRouter(Heroes);
