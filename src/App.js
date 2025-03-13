import logo from './logo.svg';
import './App.css';
import { GrFavorite } from "react-icons/gr";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='bg-slate-500'>
          Edit <code>src/App.js</code> and save to reload.
          <GrFavorite />
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
