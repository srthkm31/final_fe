import React,{useEffect} from "react";
import AnalysisWindow from "../components/AnalysisWindow";
import TopBar from "../components/top-bar";
import Chatbot from "../components/Chatbot";
import {useAtomValue} from 'jotai'
import {useNavigate} from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
const AnalysedPage = () => {
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
  return (
    <div>
      <TopBar></TopBar>
      <div className="flex flex-row gap-3 items-center">
        <AnalysisWindow></AnalysisWindow>
        <Chatbot></Chatbot>
      </div>
    </div>
  );
};

export default AnalysedPage;
