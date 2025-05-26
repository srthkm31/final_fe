import React, { useEffect } from "react";
import AnalysisWindow from "../components/AnalysisWindow";
import TopBar from "../components/top-bar";
import Chatbot from "../components/Chatbot";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
const AnalysedPage = () => {
  const navigate = useNavigate();

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
  return (
    <div>
      <TopBar></TopBar>
      <div className="w-full text-center p-1 bg-purple-950 flex-row gap-2 justify-center flex rounded-md ">
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
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>

        <p className="text-md font-semibold ">
          PLease don't refresh the page. Everything here is instantaneous, we
          don't use a permanent database to store your data so as to prevent
          data breach and provide maximum privacy.
        </p>
      </div>
      <div className="flex xl:flex-row gap-3 items-start flex-col w-full px-3">
        <div className="xl:flex-[3] w-full">
          <AnalysisWindow />
        </div>
        <div className="xl:flex-[2] w-full">
          <Chatbot />
        </div>
      </div>
    </div>
  );
};

export default AnalysedPage;
