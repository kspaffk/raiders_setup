import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [plunderBag, setPlunderBag] = useState([]);
  const [cows, setCows] = useState();
  const [ore, setOre] = useState();
  const [gold, setGold] = useState();
  const [valk, setValk] = useState();

  let tmpLocations = [
    {
      name: "fortress1",
      plunder: 2,
      plunder_arr: [],
    },
    {
      name: "fortress2",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "fortress3",
      plunder: 2,
      plunder_arr: [],
    },
    {
      name: "fortress4",
      plunder: 2,
      plunder_arr: [],
    },
    {
      name: "fortress5",
      plunder: 2,
      plunder_arr: [],
    },
    {
      name: "fortress6",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "monastery1",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "monastery2",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "monastery3",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "monastery4",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "outpost1",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "outpost2",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "outpost3",
      plunder: 4,
      plunder_arr: [],
    },
    {
      name: "outpost4",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "harbor1",
      plunder: 4,
      plunder_arr: [],
    },
    {
      name: "harbor2",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "harbor3",
      plunder: 4,
      plunder_arr: [],
    },
    {
      name: "harbor4",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "harbor5",
      plunder: 4,
      plunder_arr: [],
    },
    {
      name: "harbor6",
      plunder: 4,
      plunder_arr: [],
    },
    {
      name: "harbor7",
      plunder: 4,
      plunder_arr: [],
    },
    {
      name: "harbor8",
      plunder: 3,
      plunder_arr: [],
    },
    {
      name: "harbor9",
      plunder: 4,
      plunder_arr: [],
    },
  ];

  useEffect(() => resetPlunderBag(), [locations]);

  function resetPlunderBag() {
    setPlunderBag([
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "cow",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "ore",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "gold",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
      "valk",
    ]);
    countPlunder();
  }

  function popLocations(e) {
    e.preventDefault();
    resetPlunderBag();
    let tmpPlunderBag = plunderBag;

    tmpLocations.forEach((location) => {
      for (let i = location.plunder; i > 0; i--) {
        location.plunder_arr.push(
          tmpPlunderBag.splice(randomNumber(1, tmpPlunderBag.length), 1)
        );
      }
    });
    setLocations(tmpLocations);
    setPlunderBag(tmpPlunderBag);
  }

  function randomNumber(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  }

  function countPlunder() {
    let countCows = 0,
      countOre = 0,
      countGold = 0,
      countValk = 0;
    plunderBag.forEach((e) => {
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
      <button onClick={(e) => popLocations(e)}>Setup!</button>
    </div>
  );
}

export default App;
