import React from "react";
import SeventeenCard from "./seventeenCard";

export default function Seventeen() {
  return (
    <div className="seventeenMain">
      <div className="container">
        <SeventeenCard title="Burger" cal="40" />
        <SeventeenCard title="Chips" cal="80" />
        <SeventeenCard title="pizza" cal="30" />
        <SeventeenCard title="MotherBoard" cal="50" />
        <SeventeenCard title="Keyboard" cal="70" />
        <SeventeenCard title="Mouse" cal="210" />
        <SeventeenCard title="Pendrive" cal="50" />
        <SeventeenCard title="GraphicsCard" cal="500" />
      </div>
    </div>
  );
}
