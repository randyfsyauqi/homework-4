import './App.css';
import Row from'./pages/home/Home.js'
import data from './components/Component.js'
import Playlist from './pages/playlist/Playlist.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="Header">My Playlist</p>
        <Playlist/>
        {/*<table>
          <tbody>
            {data.map(({album, artists, name}) =>
            (<Row album={album.name} artists={artists[0].name} images={album.images[1].url} name={name} />))}
          </tbody>
        </table>
  */}
      </header>
    </div>
  );
}

export default App;
