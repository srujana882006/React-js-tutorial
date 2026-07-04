
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Cardcontent = (props) => {
  return (
   
        <div className=' relative h-3/4 w-1/4 rounded-4xl shrink-0 overflow-hidden'>
      
        <img src={props.image} alt="img" 
      className="rounded-4xl object-cover h-full"
      />
     <div className='absolute top-0 left-0 h-screen w-full p-8 flex flex-col justify-between'>

        <p className="h-10 w-10 rounded-full bg-white flex items-center justify-center">{props.idx+1}</p>
        <p className='mt-35 tracking-wider text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium dicta vel delectus debitis libero amet nesciunt omnis natus sequi.</p>
           
        <div className="flex items-center justify-between text-white "> 
           <button className='px-15 py-3 bg-blue-700 rounded-full text-1xl'>{props.binfo}</button>
           <button>
            <FontAwesomeIcon icon={faArrowRight} className='text-2xl'/>
           </button>
        </div>

      </div>
    </div>
    
  )
}

export default Cardcontent