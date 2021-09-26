import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import Data from "./data.json";

function App() {
  const [locations, setLocations] = useState(null);
  const [cows, setCows] = useState(null);
  const [ore, setOre] = useState(null);
  const [gold, setGold] = useState(null);
  const [valk, setValk] = useState(null);
  const [jarl, setJarl] = useState(null);

  const popLocations = useCallback(() => {
    const startingLocations = JSON.parse(
      JSON.stringify(Data.startingLocations)
    );
    const startingBag = [...Data.startingPlunderBag];

    startingLocations.forEach((location) => {
      for (let i = location.plunder; i > 0; i--) {
        let plunderType = startingBag.splice(
          randomNumber(1, startingBag.length),
          1
        );
        location.plunder_arr.push(plunderType[0]);
      }
    });
    setLocations([...startingLocations]);
    countPlunder(startingBag);
  }, []);

  useEffect(() => popLocations(), [popLocations]);

  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }

  function countPlunder(bag) {
    setCows(bag.filter((item) => item === "cow").length);
    setOre(bag.filter((item) => item === "ore").length);
    setGold(bag.filter((item) => item === "gold").length);
    setValk(bag.filter((item) => item === "valk").length);
    setJarl(bag.filter((item) => item === "jarl").length);
  }

  return (
    <div>
      <header>Raiders of the North Sea Plunder Randomizer</header>
      <div className="board">
        {locations &&
          locations.length > 0 &&
          locations.map((location, l) => (
            <div key={location.name} className={`plunderArea ${location.name}`}>
              <div className="location" key={location.name}>
                {location.name.substring(0, 1).toUpperCase() +
                  location.name.substring(1, location.name.length - 1)}
                <div
                  key={`plunder-count-${l}`}
                  className="location-plunder-count"
                >
                  {location.plunder}
                </div>
              </div>
              {location.plunder_arr &&
                location.plunder_arr.map((plunder, p) => (
                  <img
                    className={`plunder ${plunder}`}
                    key={location.name + "-" + p}
                    alt={plunder}
                    src={`/raiders_setup/img/${plunder}.png`}
                  />
                ))}
            </div>
          ))}
        <div className="plunderBag">
          <div className="plunderbag-title">Plunder left in bag</div>
          <div className="counts livestockCount">Livestock: {cows}</div>
          <div className="counts oreCount">Ore: {ore}</div>
          <div className="counts goldCount">Gold: {gold}</div>
          <div className="counts valkCount">Valkyrie: {valk}</div>
          <div className="counts jarlCount">Jarl: {jarl}</div>
          <button onClick={() => popLocations()}>Randomize!</button>
        </div>
      </div>
    </div>
  );
}

export default App;
