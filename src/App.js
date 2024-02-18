import logo from './logo.svg';
import './App.css';
import WhatIsAPO from './components/WhatIsAPO';
import Sections from './components/Sections';
import Our3Pillars from './components/Our3Pillars';

function App() {
  return (
    <div className="App">
      <Sections>
        <WhatIsAPO />
        <Our3Pillars />
      </Sections>
    </div>
  );
}

export default App;
