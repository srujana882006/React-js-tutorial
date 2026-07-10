import { Link, Outlet } from "react-router-dom"




const Contact = () => {
  return (
     <div>

      <div className="flex  items-center justify-center gap-10 py-5 ">
        <Link to='/contact/kids'><p>Kid</p></Link>
        <Link to='/contact/women'><p>Women</p></Link>
        <Link to='/contact/men'><p>Men</p></Link>
        
    </div>
    <Outlet />

      
      
       </div>
  )
}

export default Contact