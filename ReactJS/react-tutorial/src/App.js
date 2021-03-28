import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { useState } from 'react';

function App() {
    
    const [characters, setCharacters] = useState(
    [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]
    );

  function removeCharacter(index) {
    setCharacters(characters.filter((character, i) => {
        return i !== index
    }));
  }

  return (
      <div className="container">
      <h1>Hello React</h1>
<Table characterData={characters} removeCharacter={removeCharacter}/>
      </div>
  );
}


export default App;
