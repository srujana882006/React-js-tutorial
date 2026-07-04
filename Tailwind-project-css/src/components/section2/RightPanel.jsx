import Cardcontent from "./Cardcontent"

const RightPanel = (props) => {
  return (
    <div className=" rounded-5xl  w-full  pb-16 pt-6  flex items-center gap-10 h-screen  px-18"> 
      
      {
  props.array.map((item, idx) => {
    return (
      <Cardcontent
        key={idx}
        idx={idx}
        image={item.image}
        binfo={item.binfo}
      />
    );
  })
}
      
      </div>
   
  )
}

export default RightPanel