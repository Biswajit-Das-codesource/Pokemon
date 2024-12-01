function Card({e}){
  return (
    <>
      <div className="card" style={{height:"fit-content",width:"250px",display:"flex",flexDirection:"column ",justifyContent:"center",alignItems:"center",borderRadius:"1rem"}}>
         
          <img src={e.sprites.other.dream_world.front_default} height={"200px"} width={"200px"}></img>
            <div className="details" style={{width:"100%",display:"flex",flexWrap:"warp",gap:"0rem",flexDirection:"column",justifyContent:'center',alignItems:'center'}}>
              <h3>Name: {e.name}</h3>
              <p>Height: {e.height}</p>
              <p>Weight: {e.weight}</p> 
              <p>Experience: {e.base_experience}</p>
            </div> 
      </div>
    </>
  )
}

export default Card;