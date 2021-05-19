import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [comments, setComments] = useState([
    {
      id: 1,
      parentId: null,
      text: "1"
    },
    {
      id: 2,
      parentId: 1,
      text: "2"
    },
    {
      id: 3,
      parentId: 1,
      text: "3"
    },
    {
      id: 4,
      parentId: 3,
      text: "4"
    },
    {
      id: 5,
      parentId: 4,
      text: "5"
    }
  ])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
