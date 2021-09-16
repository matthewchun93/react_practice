import './App.css';
import React, {useState} from 'react';
import List from './components/List'
import AddToList from './components/AddToList';


export interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  const [people, setPeople] = useState<IState['people']>([
    {
      name: "LeBron James",
      age: 36,
      url: "https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
      note: "cannot stay on one team",
    }
  ])

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople}/>

    </div>
  );
}

export default App;
