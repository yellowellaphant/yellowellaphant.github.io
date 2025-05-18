import logo from './logo.svg';
import './styles.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="navbar block">1 navbar</div>
        <div class="greeting-block block">2 Greeting</div>
        <div class="about-block block">
          <div class="about-block-top">
            <div class="profile-photo block"></div>
          </div>
          4 about
        </div>
        <div class="working-skills-block">5 working skills</div>
        <div class="projects-block block">6 projects</div>
        <div class="art-block block">7 art</div>
        <div class="airforce-block block">8 air force</div>
        <div class="toolbox-block block">9 toolbox</div>
        <div class="footer block">10 footer</div>
      </div>
    </div>
  );
}

function UnderConstruction() {
  return <div className='under-construction'>    
    <img className='construction-cat-png' src="https://cdn.sanity.io/images/2ctnu6ou/production/b6c798156689e8d65c3baa04595e22b169871bfc-1440x1080.png"/>
    <h1>Under Construction</h1>
  </div>
}

export default App;
