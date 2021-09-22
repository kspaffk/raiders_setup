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
    const startingLocations = JSON.parse(JSON.stringify(Data.startingLocations));
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
  }, [])

  useEffect(() => popLocations(), [popLocations]);

  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }

  function countPlunder(bag) {
    let countCows = 0,
      countOre = 0,
      countGold = 0,
      countValk = 0,
      countJarl = 0;
    bag.forEach((e) => {
      switch (e) {
        case "cow":
          countCows++;
          break;
        case "ore":
          countOre++;
          break;
        case "gold":
          countGold++;
          break;
        case "valk":
          countValk++;
          break;
        case "jarl":
          countJarl++;
          break;
        default:
          break;
      }
    });
    setCows(countCows);
    setOre(countOre);
    setGold(countGold);
    setValk(countValk);
    setJarl(countJarl);
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
                {location.name}
              </div>
              {location.plunder_arr &&
                location.plunder_arr.map((plunder, p) => (
                  <li
                    className={`plunder ${plunder}`}
                    key={location.name + "_" + p}
                  >
                    {plunder}
                  </li>
                ))}
            </div>
          ))}
      </div>
      <div className="plunderBag">
        <div className="plunderbag-title">Plunder in Bag</div>
        <div className="livestockCount">Livestock: {cows}</div>
        <div className="oreCount">Ore: {ore}</div>
        <div className="goldCount">Gold: {gold}</div>
        <div className="valkCount">Valkyrie: {valk}</div>
        <div className="jarlCount">Jarl: {jarl}</div>
      </div>
      <button onClick={() => popLocations()}>Randomize!</button>
    </div>
  );
}

export default App;
