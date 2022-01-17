import './App.css';
import Building from './Components/Building';
import Features from './Components/Features';
import Last from './Components/Last';
import Navbar from './Components/Navbar';
import Video from './Components/Video';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Video />
        <Building />
        <Features />
        <Last />
    </div>
  );
}

export default App;
