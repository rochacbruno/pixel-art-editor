function Paleta({cores, onChangeColor}) {
   return (
      <div className="paleta">
        {cores.map((c, index) => (
          <button
            key={'cor'+index}
            style={{backgroundColor: c, color: "cyan"}}
            onClick={()=>{onChangeColor(c)}}
          >{c}</button>
        ))}
      </div>
  )
}


export default Paleta;
