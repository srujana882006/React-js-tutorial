import Leftpanel from "./Leftpanel"
import RightPanel from "./RightPanel"


const Section2 = (props) => {
  return (
    <div className='flex' > 
        <Leftpanel />
        <RightPanel array={props.array}/>
    </div>
  )
}

export default Section2