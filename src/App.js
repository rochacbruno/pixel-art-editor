import './App.css';
import {useState} from "react";
import Paleta from './Paleta';
import Canva from './Canva';

function App() {
    const [pixels, setPixels] = useState(Array(64).fill('blue'))
    const [cor, setCor] = useState('red')
    const cores = [
       'red', 'green', 'blue', 'brown', 'orange', 'purple', 'yellow', 'black', 'white' 
    ]  
    function paint(ev, index) {
      if (ev.buttons === 0) return
      if(pixels[index] === cor) return
      const newPixels = [...pixels]
      newPixels[index] = cor
      setPixels(newPixels)
    }
  
    return (
    <div className="App">
      <Paleta cores={cores} onChangeColor={setCor}/>
      <Canva pixels={pixels} onMouseMove={paint}/>
    </div>
  );
}

export default App;
