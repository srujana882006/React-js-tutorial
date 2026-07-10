import { Link } from "react-router-dom"



const Navbar = () => {
  return (
    <div className="h-15 bg-cyan-900 flex items-center justify-between text-white">
      <h3 className="ml-4">Srujana</h3>
      <div className="flex items-center gap-4 mr-4"> 
      <Link to='/'><h3 className="underline">Home</h3 ></Link>
      <Link to='/about'><h3 className="underline">About</h3></Link>
      <Link to='/contact'><h3 className="underline">Contact</h3></Link>
      <Link to='/course'><h3 className="underline">Course</h3></Link>
      </div>

    </div>
  )
}

export default Navbar