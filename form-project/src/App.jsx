import { useState } from "react"


const App = () => {

const [first, setFirst] = useState('')
const [second, setSecond] = useState('')
const [third, setThird]= useState([])

const submitHandler =(e)=>{
  e.preventDefault()
  console.log(first,second)

  const task=[...third]

  task.push({first,second})

  setThird(task)

  console.log(task)

  setFirst('')
  setSecond('')

}

const deleteNote=(idx)=>{
  const task=[...third]
  
  task.splice(idx,1)

  setThird(task)
}

  return (
    <div className="bg-black min-h-screen lg:flex ">
      
        <div className="lg:w-1/2">
          <form 
          className="flex flex-col m-2  text-white lg:h-full w-3/4 " 
          onSubmit={(e)=>{
            submitHandler(e)
          }}>
           <h3 className="font-bold text-xl text-white p-3">Add your Notes</h3>
          <input 
          type="text"
           placeholder="Enter the notes" 
           className=" m-4 px-5 py-4 rounded border-2 outline-none" 
           value={first}
           onChange={(e)=>{
            setFirst(e.target.value)
           }}
           />
          <textarea 
          placeholder="Write details"
           className=" m-4 px-2 py-10 rounded border-2 outline-none "
           value={second}
           onChange={(e)=>{
            setSecond(e.target.value)
           }}
           ></textarea>
          <button className=" m-4 py-3 rounded border-2 outline-none bg-white text-black active:scale-90">Add notes</button>
        </form>
        </div>
      

      <div className=" h-full m-4 flex flex-col lg:w-1/2 lg:border-l-2 border-white">
        <h3 className="font-bold text-xl text-white p-3">Your Recent Notes</h3>

        <div className="flex flex-wrap h-full gap-5 ml-5">
       {
        third.map((elem,idx)=>{

          return  <div key={idx} className="h-52 w-40 bg-white rounded text-black p-3 flex flex-col items-start justify-between ">
                      <div className="">
                        <h3 className="text-xl font-bold">{elem.first}</h3>
                      <p className=" text-gray-500 font-medium">{elem.second}</p>
                      </div>
                      <button 
                      onClick={
                        ()=>{
                          deleteNote(idx)
                        }
                      }
                      className="px-10 py-2 bg-red-600 text-white font-bold rounded active:scale-90">Delete</button>


          </div>
        })
       }
       
        </div>
      </div>

    </div>
  )
}

export default App