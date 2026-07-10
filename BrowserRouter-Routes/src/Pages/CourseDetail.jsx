import { useParams } from "react-router-dom"


const CourseDetail = () => {
    const params=useParams()

  return (
   <div className="min-h-screen flex  items-center justify-center underline ">
      <h1 className="font-extrabold text-8xl">{params.id} course deatails</h1>
       </div>
  )
}

export default CourseDetail