import logo from './logo.svg';
import './App.css';
import Table from './Table';
import Form from './Form';
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
  
  function handleSubmit(character) {
      setCharacters([... characters, character]);
  }

  return (
      <div className="container">
      <h1>Hello React</h1>
      <Table characterData={characters} removeCharacter={removeCharacter}/>
      <Form handleSubmit={handleSubmit}/>
      </div>
  );
}


export default App;
