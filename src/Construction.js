import './App.css';

function Construction() {
  return (
    <div className="App">
      <header className="App-header">
        <UnderConstruction />        
      </header>
    </div>
  );
}

function UnderConstruction() {
  return <div className='under-construction'>    
    <img className='construction-cat-png' src="https://cdn.sanity.io/images/2ctnu6ou/production/b6c798156689e8d65c3baa04595e22b169871bfc-1440x1080.png"/>
    <h1>Under Construction</h1>
  </div>
}

export default Construction;
