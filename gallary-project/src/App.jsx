import axios from "axios";
import { useEffect, useState } from "react";


const App = () => {
    
    const [first, setFirst] = useState([])
    const [index, setIndex] = useState(1)

    const getData=async()=>{

      const response=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
      console.log(response.data)

      setFirst(response.data)
    }

    useEffect(function(){
      getData()
    },[Index])

    let noData='Loading...'

    if(first.length>0)
      {
      noData =first.map((elem,idx)=>{

        return <div className="">
               
                 <a href={elem.url} target='_blank'>
                  <img src={elem.download_url} className="h-60 w-60 object-cover rounded-xl"/>
                <h3 className="text-white mt-2 font-bold">{idx+1}_{elem.author}</h3>
                 </a>
        </div>
      })
          
        
    }

    
    
  return (
   
      <div className="m-5">
     
        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          {noData}
        </div>

        <div className="flex flex-wrap gap-4 items-center justify-center mt-5 ">
           <button
            className="px-5 py-3 bg-amber-400 text-black rounded active:scale-95 "
             onClick={
               ()=>{
                if(index>0){
                  setIndex(index-1)
                  setFirst([])
                }
               }
             }>
              Prev
              </button>
              <h3>page {index}</h3>
           <button 
           className="px-5 py-3 bg-amber-400 text-black rounded active:scale-95 "
            onClick={
              ()=>{
                setIndex(index+1)
                setFirst([])
              }
            }>
            Next
            </button>
        </div>
        
    </div>
    
  )
}

export default App