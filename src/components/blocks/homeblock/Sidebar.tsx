import {BsFillArrowRightCircleFill} from "react-icons/bs"
import {ImSpinner4} from "react-icons/im"
import {useState} from "react"
import {BiSolidDashboard, BiMessageRoundedDots} from "react-icons/bi"
import {AiOutlineFolder} from "react-icons/ai"
import {SlCalender} from "react-icons/sl"

const Sidebar = () => {

    //Create a Function from the toggle button
    const [open ,setOpen ] = useState<boolean>(true);

   

    //for the menu nav bar

    const Navig= [
        {
            tittle: "Dashboard",
            icons:<BiSolidDashboard/>
        },
        {
            tittle: "Project",
            icons:<AiOutlineFolder/>
        },
        {
            tittle: "Calender",
            icons:<SlCalender/>
        },
        {
            tittle:"Message",
            icons:<BiMessageRoundedDots/>
        }

    ]
  return (
    <div className={` bg-[#123456] p-5 pt-8 relative h-screen ${open ? "w-[300px]" : "w-[100px]"} duration-300 `}>
        {/* open and close toggle button */}
        <div className={` text-white text-3xl absolute -right-2 top-9 cursor-pointer ${!open && "rotate-180"}`}
        onClick={()=> setOpen(!open)} 
        >
        <BsFillArrowRightCircleFill className= "bg-[#123456] border-[#123456] rounded"/>
        </div>

        {/* for the  */}
        <div className="flex items-center">
            <div className={`text-4xl cursor-pointer mr-5 ${!open && "rotate-[360deg]"} duration-500 text-white `}>
                <ImSpinner4/>
            </div>
            <h1 className={`origin-left font-semibold  text-white ${!open && "scale-0"} duration-300`}>Socket Class</h1>
        </div>
    {/* 2nd meun  */}
     {/* <div>
         {!open ? (    <BsFillArrowRightCircleFill className= "bg-[#123456] border-[#123456] rounded"/>) : null}
     </div> */}

        {/* menu */}
        <div className=" mt-[40px] text-white flex">
            <div className=" flex gap-6 flex-col text-[20px]">
        {Navig.map((items, idx)=>{
            return (
                <li key={idx} className=" flex gap-3 hover:bg-gray-300 cursor-pointer">
                    <p className=" flex  items-center ">{items.icons}</p>
                    {open ? (<p>{items.tittle}</p>) : null}
                
                </li>
            )
        })}
            
            </div>
        </div>
    </div>
  )
}

export default Sidebar