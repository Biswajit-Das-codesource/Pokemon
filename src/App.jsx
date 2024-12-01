
import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

function App(){

  const [apidata,setapidata]=useState([])
  const [loading,setloading]=useState(true)
  const [input,setinput]=useState("")

  async function fetchData() {
      const api="https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200/results"
      const res=await fetch(api)
      const data=await res.json()
      // console.log(data.results)
      
     const detailedPokemon = data.results.map(async(e)=>{

          const fetchData=await fetch(e.url)
          const realdata=await fetchData.json()
          return realdata

      })

      const fetchpokemon = await Promise.all(detailedPokemon)
      console.log(fetchpokemon)

      setapidata(fetchpokemon)

      setloading(false) 

  }

  useEffect(()=>{  
    fetchData()

  },[])

  const search = apidata.filter((e)=>{
    return e.name.toLowerCase().includes(input.toLowerCase())
    })

    console.log(search)
 

  if(loading) return <h2>loading .... . .</h2>

  return (
    <>
  
      <h1 align="center">Welcome to Pokemon World</h1>
      <div className="search">
      <input type="text" className="input" placeholder="Search your fav pokemon" onChange={(e)=>setinput(e.target.value)}/>
      </div>
      <div style={{height:"100vh",width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center",gap:"2rem"}}>
        {
          search.map((e,index)=>{
           return (
            <div key={index}>
              <Card e={e}/>
            </div>
          )
          })  
        }
      </div>
    </>
  )
}


export default App;
