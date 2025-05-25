import React,{useEffect} from "react";
import DragDrop from "../components/DragDrop";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/top-bar";
import {analyzedAtom,loaderAtom1,processedAtom} from "../atoms/atoms.js"
import {useAtomValue,useAtom} from 'jotai'
import { CircleLoader } from "react-spinners";
import axios from 'axios'
import {currentId} from '../atoms/atoms.js'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
axios.defaults.withCredentials = true;



const Analyse = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };
  
    window.addEventListener('beforeunload', handleBeforeUnload);
  
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);
  useEffect(() => {
    
    const token = Cookies.get('status');
    try {
      const decoded=jwtDecode(token)
      if(!decoded.state){
        navigate('/')
      }
    } catch (error) {
      navigate("/login")
    }
   
  }, [])
  
 const currentIdVal=useAtomValue(currentId)
  // Hamburger menu logic
 
 
  const [loader,setLoader]=useAtom(loaderAtom1)
  const data=useAtomValue(analyzedAtom)
  console.log(data)
  const [final,setFinal]=useAtom(processedAtom)
  return (
    <div>
      <TopBar></TopBar>
      <div className="flex justify-center mt-55 items-center flex-col gap-10">
        <DragDrop></DragDrop>
        
        <button
          
          onClick={async () => {
            event.preventDefault()
           setLoader(true)
          
           var hold =JSON.parse(localStorage.getItem('user'))
           console.log(hold.email)
          //  console.log(data)
           var response = await axios.post("http://localhost:4000/analyzer",{
            userId:currentIdVal,
            data,
            end:true
           },{
            headers:{
              userId:hold.email
            }
           })
           
           setFinal(response.data.data)
           setLoader(false)
           setTimeout(() => {
            navigate("/analysis")
           }, 500);
           
           
          }}
        >
    
          {loader?
          <CircleLoader
          color='red'
          loading={loader}
          size={40}
        />
        :
        <div className="text-center text-lg bg-orange-600 p-3 rounded-md shadow-md shadow-neutral-800 w-[150px] font-semibold flex justify-center gap-2 items-center hover:opacity-80 cursor-pointer">
          <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
        />
      </svg>
        
        'Analyze'
        </div>
        }
        </button>
      </div>
    </div>
  );
};

export default Analyse;
