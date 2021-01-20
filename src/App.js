import './App.css';

function App() {
  let locations = [
    {
      name: 'fortress1',
      plunder: 2,
      plunder_arr: []
    },
    {
      name: 'fortress2',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'fortress3',
      plunder: 2,
      plunder_arr: []
    },
    {
      name: 'fortress4',
      plunder: 2,
      plunder_arr: []
    },
    {
      name: 'fortress5',
      plunder: 2,
      plunder_arr: []
    },
    {
      name: 'fortress6',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'monastery1',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'monastery2',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'monastery3',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'monastery4',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'outpost1',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'outpost2',
      plunder: 3,
      plunder_arr: []
    },    {
      name: 'outpost3',
      plunder: 4,
      plunder_arr: []
    },    {
      name: 'outpost4',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'harbor1',
      plunder: 3,
      plunder_arr: []
    },
    {
      name: 'harbor2',
      plunder: 4,
      plunder_arr: []
    },    {
      name: 'harbor3',
      plunder: 4,
      plunder_arr: []
    },    {
      name: 'harbor4',
      plunder: 4,
      plunder_arr: []
    },    {
      name: 'harbor5',
      plunder: 3,
      plunder_arr: []
    },    {
      name: 'harbor6',
      plunder: 4,
      plunder_arr: []
    }
  ]

  return (
    <div className="App">
      {
        locations.map(location => <div>{JSON.stringify(location)}</div>)
      }
      <button>
        Setup!
      </button>
    </div>
  );
}

export default App;
