import { useNavigate } from "react-router-dom"


const Navbar2 = () => {

   const navigate= useNavigate()

  return (
    <div className="flex items-center gap-2 bg-cyan-700">
        <button onClick={()=>{navigate('/')}} className="px-10 py-2 bg-amber-600 rounded m-3">Return to Home</button>

        <button onClick={()=>{navigate(-1)}} className="px-5 py-2 bg-amber-600 rounded m-3">Back</button>
        <button onClick={()=>{navigate(+1)}} className="px-5 py-2 bg-amber-600 rounded m-3">Next</button>
    </div>
  )
}

export default Navbar2