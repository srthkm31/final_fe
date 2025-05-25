import React, { useEffect, useState, useRef } from "react";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";
import { chatHistory ,graphLoading} from "../atoms/atoms.js";
import { CircleLoader } from "react-spinners";
import { useAtom,useAtomValue } from "jotai";
import axios from 'axios'
import {currentId,chartData} from '../atoms/atoms.js'


axios.defaults.withCredentials = true;

const Chatbot = () => {
  const timer = useRef(null);
  const [input, setInput] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const navigate = useNavigate();
  const [chat, setChat] = useAtom(chatHistory);
  const [graphLoader,setGraphLoader]=useAtom(graphLoading)
  const currentIdVal=useAtomValue(currentId)
  const [chart,setChart]=useAtom(chartData)
  const [loading,setLoading]=useState(false)
  useEffect(() => {
    if (isClicked) {
      setFinalInput(input);
    }
  }, [isClicked]);

  const Handler = async () => {
    setLoading(true)
    setIsClicked(true);
    var data =JSON.parse(localStorage.getItem('user'))
    const response=await axios.post('http://localhost:4000/chatbot',{
      question:input,
      end:true
    },{
      headers:{
        userId:data.email
      }
    })
    setChat((prev) => [...prev, { question: input }, { answer: response.data.data}]);
    setLoading(false)
  };

  const debounced = (e) => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setInput(e);
    }, 1000);
  };
  async function run(){
    setGraphLoader(true)
    var data =JSON.parse(localStorage.getItem('user'))
    if(!chart.data){
      var response = await axios.get('http://localhost:4000/graphs',{
        headers:{
          userId:data.email
        }
      })
      setChart(response.data)
    }
    
    setGraphLoader(false)
    setTimeout(() => {
      navigate('/graphpage')
    }, 200);
  }
  return (
    <div className="w-[750px] h-[850px] mt-0 flex flex-col gap-2 items-center">
      <button
        className="bg-green-600 mt-1 p-2 rounded-full w-[250px] hover:opacity-85 cursor-pointer"
        onClick={run}
      >
        {
          graphLoader?
          'Generating Graphs...'
          :
          'Visualize with graphs'
        }
        
      </button>

      <div className="border-1 border-orange-600 w-[700px] h-[820px] bg-neutral-900 text-white rounded-2xl shadow-lg shadow-orange-600/50">
        {isClicked && (
          <div className="flex flex-col gap-3 p-5 h-[730px] overflow-auto w-[680px] m-2">
            {chat.map((item, index) => (
              <React.Fragment key={index}>
                {item.question && (
                  <div className="flex flex-row gap-3 p-2 bg-neutral-700 rounded-lg">
                    <div className="text-lg font-bold items-center w-8 h-8 flex justify-center rounded-full bg-white text-black shadow-md mb-1">
                      U
                    </div>
                    <p className="text-lg font-semibold">{item.question}</p>
                  </div>
                )}
                {item.answer && (
                  <div className="flex flex-row gap-3 p-2 border-1 border-neutral-600 rounded-lg">
                    <div className="items-center w-8 h-8 flex justify-center rounded-full bg-white text-black shadow-md mb-1">
                      🤖
                    </div>
                    <ReactMarkdown>{item.answer}</ReactMarkdown>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}

        <div
          className={`${
            isClicked
              ? "flex flex-row items-center gap-5 justify-center"
              : "flex flex-col items-center pt-[350px] gap-3"
          }`}
        >
          <p className="font-bold text-2xl">ChatBot</p>
          <div className="flex flex-row gap-2 items-center justify-center">
            <input
              className="rounded-full pl-5 pr-3 pt-2 pb-2 w-[400px] bg-white/90 text-black font-semibold shadow-sm shadow-white inset-ring-2 inset-ring-blue-500/60"
              placeholder="Search Here"
              onChange={(e) => debounced(e.target.value)}
            />
            {input && (
              <button
                className="rounded-full bg-black p-2 items-center"
                onClick={Handler}
              >
                {
                  loading?
                  <CircleLoader
                  color='red'
                  loading={loading}
                  size={20}
                />
                  :<svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
                }
                
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
