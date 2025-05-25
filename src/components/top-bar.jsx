import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import HamburgerMenu from "./Hamburger";
import { useEffect, useState } from "react";
import axios from 'axios'
import { jwtDecode } from "jwt-decode";
// import {CircleSpinner} from 'react-spinners'
import Cookies from 'js-cookie';
import { CircleLoader } from "react-spinners";
import {useNavigate} from 'react-router-dom'
axios.defaults.withCredentials = true;
const TopBar = () => {
  
  const [visible, setVisible] = useState(false);
  const [signedIn,setSignedIn]=useState(false)
  const [imgUrl,setImgUrl]=useState('')
  const [logoutLoader,setLogoutLoader]=useState(false)
  const navigate=useNavigate()
  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth <= 767) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    checkWidth();
    window.addEventListener("resize", checkWidth);

    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, []);
  useEffect(() => {
    
    const token = Cookies.get('status');
    try {
      const decoded=jwtDecode(token)
      if(decoded.state){
        setSignedIn(true)
        const userData=JSON.parse(localStorage.getItem('user'))
        setImgUrl(userData)
      }
    } catch (error) {
      console.log(error)
    }
   
  }, [])
  async function logout(){
    setLogoutLoader(true)
    var response=await axios.get("http://localhost:4000/signout")
    localStorage.removeItem('user')
    setLogoutLoader(false)
    navigate('/')
    window.location.reload();

  }
  return (
    <div className="flex flex-wrap justify-between items-center px-4 py-3 sticky top-0 z-50 border-b border-white/10 bg-black shadow-[0_4px_30px_rgba(255,255,255,0.1)]">
      {/* Left Section */}
      <div className="flex items-center gap-6 text-white">
        <p className="text-2xl font-bold pr-4 hover:text-orange-400 transition cursor-pointer">
          <a href="/">FinanceAI</a>
        </p>

        {/* Hide nav links on small screens */}
        <div className="hidden md:flex gap-6">
          <p className="text-lg font-medium hover:text-orange-400 transition cursor-pointer">
            <a href="/analyse">Analyse</a>
          </p>

          <p className="text-lg font-medium hover:text-orange-400 transition cursor-pointer">
            <a href="/knowthejargon">Know The Jargon</a>
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6 text-white mt-3 md:mt-0">
        {/* Hide on mobile too */}
        <p className="hidden md:block text-lg font-medium hover:text-orange-400 transition cursor-pointer">
          <a>About</a>
        </p>

        {visible && <HamburgerMenu></HamburgerMenu>}

        {/* Menu Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="text-lg font-bold items-center cursor-pointer w-10 h-10 flex justify-center rounded-full bg-white text-black shadow-md hover:scale-105 transition mb-1">
              {
                imgUrl.image?
                <img src={imgUrl.image} className='rounded-full'/>
                :'U'
              }
            </div>
          </DropdownMenuTrigger>
          {
            signedIn?
            <DropdownMenuContent className="border border-white/20 p-7 text-base bg-black/80 backdrop-blur-sm rounded-md text-white shadow-lg">
            
            
            <DropdownMenuItem className="p-2 hover:text-orange-400 hover:bg-white/10 rounded cursor-pointer  text-center mb-2 bg-neutral-800" onClick={logout}>
              {
                logoutLoader?
                <CircleLoader
                color='red'
                loading={logoutLoader}
                size={20}
              />:'Log Out'
              }
            </DropdownMenuItem>
            
            <DropdownMenuSeparator className="my-2" />
          </DropdownMenuContent>
            :null
          }
          
        </DropdownMenu>
      </div>
    </div>
  );
};

export default TopBar;
