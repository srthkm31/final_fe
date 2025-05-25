import homepage_video1 from "../media/homepage_video1.mp4";
import homepage_video2 from "../media/homepage_video2.mp4";
import { useNavigate} from "react-router-dom";
import { Button } from "./ui/button";

const VideoSection  = () => {
    const navigate=useNavigate()
  return ( 
    <div className="flex flex-col items-center pt-7 pb-10">
        <div className="flex flex-col items-center pt-7">
            <div className="bg-neutral-800 rounded-full border- items-center">
                <p className="text-xl font-semibold p-3 pb-2 text-center text-orange-500">
                    Features
                </p>
            </div>
                <p className="pt-5 text-center">
                    <span className="text-5xl md:text-7xl">Easily make</span>
                    <span className="text-5xl md:text-7xl bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(204,85,0,0.5))] text-transparent bg-clip-text"> your decisions</span>
                </p>
            </div>  
            <div className="flex flex-row justify-center gap-6 pt-10 w-full px-4">
                <div className="w-full lg:w-1/2 aspect-video border-2 rounded-lg border-orange-500 overflow-hidden">
                    <video autoPlay playsInline muted loop className="w-full h-full object-contain">
                    <source src={homepage_video1} type="video/mp4" />
                    </video>
                </div>
                <div className="w-full lg:w-1/2 aspect-video border-2 rounded-lg border-orange-500 overflow-hidden">
                    <video autoPlay playsInline muted loop className="w-full h-full object-contain">
                    <source src={homepage_video2} type="video/mp4" />
                    </video>
                </div>
            </div>

                
            <div className="flex flex-col lg:flex-row w-full gap-y-10 gap-x-10 px-6 py-10 lg:px-20 lg:py-20">
            {/* Left Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center ">
                {/* Feature 1 */}
                <div className="flex w-full max-w-[600px] items-start gap-4 border border-white/20 p-6 rounded-lg">
                    <div className="p-2 bg-neutral-900 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="2" stroke="currentColor" className="w-8 h-8 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-semibold">Easy to Use</h3>
                        <p className="text-base lg:text-lg text-gray-400">Simple and intuitive interface.</p>
                    </div>
                </div>

                {/* Feature 2 */}
                <div className="flex w-full max-w-[600px] items-start gap-4 border border-white/20 p-6 rounded-lg">
                    <div className="p-2 bg-neutral-900 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m.75 12 3 3m0 0 3-3m-3 3v-6m-1.5-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-semibold">Drag-and-Drop Interface</h3>
                        <p className="text-base lg:text-lg text-gray-400"> Analysis by dragging and dropping the file. </p>
                    </div>
                </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 w-full lg:w-1/2 items-center">
                {/* Feature 3 */}
                <div className="flex w-full max-w-[600px] items-start gap-4 border border-white/20 p-6 rounded-lg">
                    <div className="p-2 bg-neutral-900 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-semibold">Built-in ChatBot</h3>
                        <p className="text-base lg:text-lg text-gray-400">Get assistance with AI chatbot.</p>
                    </div>
                </div>

                {/* Feature 4 */}
                <div className="flex w-full max-w-[600px] items-start gap-4 border border-white/20 p-6 rounded-lg">
                    <div className="p-2 bg-neutral-900 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-orange-500">
                        <path strokeLinecap="round" strokeLinejoin="round"
                                d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 9h3.75m-4.5 2.625h4.5M12 18.75 9.75 16.5h.375a2.625 2.625 0 0 0 0-5.25H9.75m.75-9H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"/>
                        </svg>
                    </div>
                    <div>
                        <h3 className="text-xl lg:text-2xl font-semibold">Precise Analysis</h3>
                        <p className="text-base lg:text-lg text-gray-400">Deep insights powered by advance model.</p>
                    </div>
                </div>
            </div>
        </div>
        <Button onClick={()=>{
            navigate("/analyse")
        }}>Try it now 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
        </Button>
    </div>
        
  )
}

export default VideoSection

