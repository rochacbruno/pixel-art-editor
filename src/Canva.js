function Canva({pixels, onMouseMove}) {
  return (
    
      <div className="canva">
        {pixels.map((pixel, index) => (
          <div 
            key={'pixel'+index} 
            style={{backgroundColor: pixel}}
            onMouseMove= {(ev) => {onMouseMove(ev, index)}}
            ></div>
        ))}
      </div>

  )
}

export default Canva;
