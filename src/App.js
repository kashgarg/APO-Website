import logo from './logo.svg';
import './App.css';
import WhatIsAPO from './components/WhatIsAPO';
import Sections from './components/Sections';

function App() {
  return (
    <div className="App">
      <Sections>
        <WhatIsAPO />
      </Sections>
    </div>
  );
}

export default App;
