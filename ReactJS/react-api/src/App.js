import logo from './logo.svg';
import './App.css';
import List from './List';
import { useState } from 'react';

function App() {
  const [ data, setData ] = useState([]);

  const url =
      'https://en.wikipedia.org/w/api.php?action=opensearch&search=React&format=json&origin=*'

  fetch(url)
      .then((result) => result.json())
      .then((result) => {
        setData(result);
      });
  
  return (
    <div className="App">
    <h1>Search</h1>
        <List data={data} />
    </div>
  );
}

export default App;
