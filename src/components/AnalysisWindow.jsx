import React,{useEffect} from "react";
import ReactMarkdown from "react-markdown";
import {useAtomValue} from 'jotai'
import {processedAtom} from '../atoms/atoms.js'
const AnalysisWindow = () => {

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
  const data=useAtomValue(processedAtom)
  // console.log(data)
  return (
    
    data ?(
      <div className="flex flex-col justify-between items-center  w-[1150px] gap-3 pl-7">
      <p className="pt-2 font-bold text-xl">Analysis</p>
      <div className="w-[1120px] h-[795px] border-1 border-black-500 bg-neutral-900 shadow-white shadow-lg/20  overflow-x-hidden text-wrap  rounded-2xl overflow-y-auto text-lg text-justify break-normal font-semibold pl-5 pr-5 pt-3 pb-3 tracking-wide leading-8">
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    </div> 
      ):
<div className="flex flex-col justify-between items-center  w-[1150px] gap-3 pl-7">
      <p className="pt-2 font-bold text-xl">Analysis</p>
      <div className="w-[1120px] h-[795px] border-1 border-black-500 bg-neutral-900 shadow-white shadow-lg/20  overflow-x-hidden text-wrap  rounded-2xl overflow-y-auto text-lg text-justify break-normal font-semibold pl-5 pr-5 pt-3 pb-3 tracking-wide leading-8">
        <ReactMarkdown></ReactMarkdown>
      </div>
    </div> 
    
 
  );
};

export default AnalysisWindow;
