

import HeroSection from '../components/hero-section'
import {useEffect} from 'react'




import TopBar from '../components/top-bar'
import VideoSection from '../components/video section'


const HomePage = () => {
 
  
  return (
    
      <div className='flex flex-col'>
          <TopBar></TopBar>
        <div>
          <HeroSection></HeroSection>
        </div>
        <VideoSection></VideoSection>

        
    </div>

    
    
  )
}

export default HomePage