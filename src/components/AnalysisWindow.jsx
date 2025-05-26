import React, { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import { useAtomValue } from "jotai";
import { processedAtom } from "../atoms/atoms.js";
const AnalysisWindow = () => {
  useEffect(() => {
    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = "";
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  const data = useAtomValue(processedAtom);
  // console.log(data)
  return data ? (
    <div className="flex flex-col justify-between items-center w-full gap-3 pl-1 pr-1 ">
      <p className="pt-2 font-bold text-xl">Analysis</p>
      <div className=" w-full h-[800px]  border-1 border-black-500 bg-neutral-900  shadow-white shadow-lg/20  overflow-x-hidden text-wrap  rounded-2xl overflow-y-auto text text-justify break-normal font-semibold pl-5 pt-3 pb-3 pr-3 tracking-wide leading-8">
        <ReactMarkdown>{data}</ReactMarkdown>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-between items-center w-full gap-3 pl-1 pr-1 ">
      <p className="pt-2 font-bold text-xl">Analysis</p>
      <div className=" w-full h-[800px]  border-1 border-black-500 bg-neutral-900  shadow-white shadow-lg/20  overflow-x-hidden text-wrap  rounded-2xl overflow-y-auto text text-justify break-normal font-semibold pl-5 pt-3 pb-3 tracking-wide leading-8">
        <ReactMarkdown></ReactMarkdown>
      </div>
    </div>
  );
};

export default AnalysisWindow;
