import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


const Leftpanel = () => {
  return (
    <div className="h-screen w-1/4 rounded-2xl flex justify-between flex-col p-4 ">
       <div className='tracking-normal mt-15 ml-5'> 
        <h2 className='text-5xl font-medium '>Prospective <br /> customer <br /> segmentation</h2>
        <p className='tracking-normal mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam repellendus tenetur maiores ab quibusdam iure similique inventore cum iusto.
        </p>
        </div>
        <div className='mb-10'>
          <FontAwesomeIcon icon={faArrowRight}  className='text-7xl'/>
        </div>

    </div>
  )
}

export default Leftpanel