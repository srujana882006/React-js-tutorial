import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Navbar from './Components/Navbar';
import NotFound from './Pages/NotFound';
import Kids from './Pages/Kids';
import Women from './Pages/Women';
import Men from './Pages/Men';
import Course from './Pages/Course';
import CourseDetail from './Pages/CourseDetail';
import Navbar2 from './Components/Navbar2';

const App = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <Routes>
           <Route path='/' element={<Home />}/>
           <Route path='/about' element={<About />}/>
           <Route path='/contact' element={<Contact />} >
             <Route path='kids' element={<Kids/>}/> 
             <Route path='women' element={<Women />}/>
             <Route path='men' element={<Men />}/>
            </Route>
            <Route path='/course' element={<Course />} />
            <Route path='/course/:id' element={<CourseDetail />} />
            <Route path='*' element={<NotFound />}/>

      </Routes>
    </div>
  )
}

export default App