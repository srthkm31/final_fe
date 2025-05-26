import React, { useEffect } from "react";
import TopBar from "../components/top-bar";
import Plot from "react-plotly.js";
import { useAtomValue } from "jotai";
import { chartData } from "../atoms/atoms.js";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom"; // Make sure this is imported

const GraphPage = () => {
  const navigate = useNavigate();
  const graph = useAtomValue(chartData);

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

  useEffect(() => {
    const token = Cookies.get("status");
    try {
      const decoded = jwtDecode(token);
      if (!decoded.state) {
        navigate("/");
      }
    } catch (error) {
      navigate("/login");
    }
  }, []);

  // Helper function to insert <br> in long titles
  const insertLineBreaks = (str, maxLength = 50) => {
    const words = str.split(" ");
    let result = "";
    let line = "";

    for (const word of words) {
      if ((line + word).length > maxLength) {
        result += line.trim() + "<br>";
        line = "";
      }
      line += word + " ";
    }
    result += line.trim();
    return result;
  };

  return (
    <div>
      <TopBar />
      <p className="text-center pl-5 pr-5 pt-5 font-bold text-3xl bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
        GRAPHS
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 justify-items-center">
        {graph.data &&
          graph.data.map((item, index) => {
            const formattedTitle = insertLineBreaks(item.title);

            return (
              <div
                key={index}
                className="shadow-lg shadow-white/60 hover:scale-105 hover:shadow-red-600 transition"
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
                    width: 500,
                    height: 400,
                    title: {
                      text: formattedTitle,
                      x: 0.5,
                      xanchor: "center",
                      yanchor: "top",
                      font: {
                        family: "Arial",
                        size: 15,
                        color: "black",
                      },
                    },
                    autosize: true,
                    margin: {
                      t: 120,
                      r: 80,
                      b: 120,
                      l: 60,
                    },
                    showLegend: true,
                    barcornerradius: 5,
                    font: {
                      family: "Arial",
                      size: 15,
                      weight: "bold",
                      color: "black",
                    },
                    xaxis: {
                      automargin: true,
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
