import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <Header />
        <p>
          Ella Upchurch
        </p>        
        <a
          className="App-link"
          href="https://github.com/yellowellaphant"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id='github-profile-pic' src='https://avatars.githubusercontent.com/u/159342759?v=4'></img>yellowellaphant (GitHub)
        </a>               
      </header>
      <Section />
      <Minigame />
      <footer id='main-footer'>poof.. I exist</footer>
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

function Header(){
  return(
  <header id='main-nav'>
    <nav>
      <a id='main-nav_home' className='main-nav_link'>Home</a>
      <a id='main-nav_resume' className='main-nav_link'>Resume</a>
      <a id='main-nav_contact' className='main-nav_link'>Contact</a>
      <a id='main-nav_fun' className='main-nav_link'>Fun</a>
    </nav>    
  </header>);
}

function Section(){
  return(
  <div>
  <section>
    <p>paragraph</p>
  </section>
  </div>);
}

export default App;