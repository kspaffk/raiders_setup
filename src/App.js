import React, { useState } from "react";
import "./App.css";
import Data from "./data.js"


function App() {
  const [locations, setLocations] = useState([]);
  const [cows, setCows] = useState(26);
  const [ore, setOre] = useState(18);
  const [gold, setGold] = useState(18);
  const [valk, setValk] = useState(18);

  function popLocations() {
    let tmpBag = Data.startingPlunderBag;
    let tmpLocations = Data.startingLocations;

    tmpLocations.forEach((location) => {
      for (let i = location.plunder; i > 0; i--) {
        location.plunder_arr.push(
          tmpBag.splice(randomNumber(1, tmpBag.length), 1)
        );
      }
    });
    setLocations(tmpLocations);
    countPlunder(tmpBag)
  }

  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }

  function countPlunder(bag) {
    let countCows = 0,
      countOre = 0,
      countGold = 0,
      countValk = 0;
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
      }
    });
    setCows(countCows);
    setOre(countOre);
    setGold(countGold);
    setValk(countValk);
  }

  return (
    <div>
      <header>Raiders of the North Sea Plunder Randomizer</header>
      <div className="board">
        {locations.length > 0 &&
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
      </div>
      <button onClick={() => popLocations()}>Randomize!</button>
    </div>
  );
}

export default App;
