import './App.css';
import {useState} from "react";
import Paleta from './Paleta';

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
      console.log('pintar'+index)
      pixels[index] = 'green';
    }
  
    return (
    <div className="App">
      <Paleta cores={cores} onChangeColor={setCor}/>

      <div className="canva">
        {pixels.map((pixel, index) => (
          <div 
            key={'pixel'+index} 
            style={{backgroundColor: pixel}}
            onMouseMove= {(ev) => {paint(ev, index)}}
            ></div>
        ))}
      </div>
    
    </div>
  );
}

export default App;
