import './App.css';
import data from './Data.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={'https://i.scdn.co/image/ab67616d0000b273e8b066f70c206551210d902b'} className="Album-img" alt="img"/>
        <h1>Bohemian Rhapsody</h1>
        <h2>Queen</h2>
        <button onClick={ ()=>
          (console.log(data)) }
          >Select</button>

      </header>
    </div>
  );
}

export default App;
