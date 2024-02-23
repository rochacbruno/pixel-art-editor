function Canva({pixels, paint}) {
  return (
    
      <div className="canva">
        {pixels.map((pixel, index) => (
          <div 
            key={'pixel'+index} 
            style={{backgroundColor: pixel}}
            onMouseDown= {(ev) => {paint(ev, index)}}
            onMouseMove= {(ev) => {paint(ev, index)}}
            ></div>
        ))}
      </div>

  )
}

export default Canva;
