import axios from 'axios'
import { useState } from 'react'
const App = () => {

  const [data, setData] = useState([])

  const getData=async()=>{

    const response=await axios.get('https://picsum.photos/v2/list?page=2&limit=100')
    
    setData(response.data)
    
    
  }

  return (
    <div className="bg-black min-h-screen">
      <button onClick={getData} className="border-white text-white m-10 px-10 border-2 active:scale-90">Click</button>

      <div className="">
        {data.map((elem,idx)=>{
         
         return <h3 key={idx}>hello,{idx}</h3>
        })}
      </div>
    </div>
  )
}

export default App