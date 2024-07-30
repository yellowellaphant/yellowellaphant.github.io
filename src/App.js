import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Ella Upchurch
        </p>        
        <a
          className="App-link"
          href="https://github.com/yellowellaphant"
          target="_blank"
          rel="noopener noreferrer"
        >
          yellowellaphant (GitHub)
        </a>
        <Minigame />
      </header>
    </div>
  );
}

function Minigame() {
  return <div className='minigame-div'>minigame</div>;
}

export default App;
