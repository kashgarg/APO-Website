import './App.css';
import WhatIsAPO from './components/WhatIsAPO';
import Sections from './components/Sections';
import Our3Pillars from './components/Our3Pillars';
import Header from './components/Header';
import Footer from "./components/Footer";
import Socials from './components/Socials';

function App() {
  return (
    <div className="App">
      <Header />
      <Sections>
        <WhatIsAPO />
        <Our3Pillars />
      </Sections>
      <Footer />
    </div>
  );
}

export default App;
