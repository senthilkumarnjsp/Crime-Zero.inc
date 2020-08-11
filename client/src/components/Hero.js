import React, { useEffect, useState } from "react";

const Hero = (props) => {
  const [logo, setLogo] = useState("");
  useEffect(() => {
    const fetchLogo = async () => {
      const result = await fetch("http://localhost:2770/api/fetchHero", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(props.match.params),
      });
      const tempLogo = await result.json();
      setLogo(tempLogo);
    };
    fetchLogo();
  });
  return (
    <>
      <div className="hero-style">
        <h2 style={{ textAlign: "center", color: "azure" }}>
          {props.match.params.heroForRescue}
        </h2>
        <p>is coming for rescue</p>
        <img
          src={logo}
          alt={`${props.match.params.heroForRescue} is coming `}
          width="350px"
          height="350px"
          align="center"
        />
        <button
          className="number-key"
          onClick={() => props.history.push("/")}
          style={{ fontSize: 25 }}
        >
          Call Another Hero
        </button>
      </div>
    </>
  );
};

export default Hero;
