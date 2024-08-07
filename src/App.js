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

function UnderConstruction() {
  return <div className='under-construction'>    
    <img className='construction-cat-png' src="https://cdn.sanity.io/images/2ctnu6ou/production/b6c798156689e8d65c3baa04595e22b169871bfc-1440x1080.png"/>
    <h1>Under Construction</h1>
  </div>
}

export default App;
