import React,{useEffect} from "react";
import TopBar from "../components/top-bar";
import Plot from 'react-plotly.js';
import {useAtomValue} from 'jotai'
import {chartData} from '../atoms/atoms.js'
import { jwtDecode } from "jwt-decode";
import Cookies from 'js-cookie';
const GraphPage = () => {
  const graph=useAtomValue(chartData)
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
      <TopBar />
      <p className="text-center pl-5 pr-5 pt-5 font-bold text-3xl  bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
        GRAPHS
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center">
        {graph.data &&
          graph.data.map((item, index) => {
            return (
              <div
                key={index}
                className="shadow-lg shadow-white/60 hover:scale-105 hover:shadow-red-600 transition "
              >
                <Plot
                  data={[
                    {
                      x: item.x,
                      y: item.y,
                      type: item.chart_type,
                    },
                  ]}
                  layout={{
                    width: 550,
                    height: 400,
                    title: {
                      text: item.title,
                      font: {
                        family: "Arial",
                        size: 20,
                        color: "black",
                      },
                    },
                    showLegend: true,
                    barcornerradius: 5,
                    font: {
                      family: "Arial",
                      size: 15,
                      weight: "bold",
                      color: "black",
                    },
                  }}
                  config={{
                    responsive: true,
                  }}
                />
              </div>
            );
          })}

        {!graph.data && <div>Tokenisation Error. Go back and regenerate</div>}
      </div>
    </div>
  );
};

export default GraphPage;
