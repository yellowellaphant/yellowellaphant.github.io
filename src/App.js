import AboutMeSection from './Components/AboutMeSection.js';
import AirforceSection from './Components/AirforceSection.js';
import AirforceBlock from './Components/AirforceSection.js';
import Navbar from './Components/Navbar.js';
import ProfilePhotoSection from './Components/ProfilePhotoSection.js';
import './styles.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <div className="greeting-block block">2 Greeting</div>
        <AboutMeSection />
        <div className="working-skills-block">5 working skills</div>
        <div className="projects-block block">6 projects</div>
        <div className="art-block block">7 art</div>
        <AirforceSection />
        <div className="toolbox-block block">9 toolbox</div>
        <div className="footer block">10 footer</div>
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
