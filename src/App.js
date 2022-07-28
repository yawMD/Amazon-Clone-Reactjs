import './App.css';
import NavBar from './components/NavBar';
import { SliderData } from './components/SliderData';
import SliderWindow from './components/SliderWindow';

function App() {
  return (
    <div className="App">
    <NavBar />
    <SliderWindow slides={SliderData} />
    </div>
  );
}

export default App;
