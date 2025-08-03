
import { assets } from "../assets/assets"
import {useNavigate} from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
  return (
    <div className='flex  justify-between py-5 mx-8 sm:mx-20 xl:mx-32'>
        <img onClick={()=>navigate('/')} src={assets.logo} className="w-32 sm:w-44" alt="" />
        <button onClick={()=>navigate('/admin')} className="px-10 py-2 outline-0 cursor-pointer bg-blue-700 text-white text-sm rounded-full flex gap-2 items-center">Login
            <img src={assets.arrow} alt="" className="w-3" />
        </button>
    </div>
  )
}

export default Navbar