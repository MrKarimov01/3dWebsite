import React, { useEffect, useRef, useState } from 'react'
import "./Main.scss"
import { imgData } from '../../Assets/imgdata'


const Main = () => {
    const parallaxs = useRef(null)
    const [data, setData] = useState(null)
    useEffect(()=>{
      let elements = parallaxs.current;
      
      setData(elements)
    },[])
   
  return (
    <main ref={parallaxs}>
        <div className="vignette"></div>
        <img src={imgData.bg_img} className='parallax bg-img'/>
        <img src={imgData.fog_7} className='parallax fog-7'/>
        <img src={imgData.mountain_10} className='parallax mountain-10'/>
        <img src={imgData.fog_6} className='parallax fog-6'/>
        <img src={imgData.mountain_9} className='parallax mountain-9'/>
        <img src={imgData.mountain_8} className='parallax mountain-8'/>
        <img src={imgData.fog_5} className='parallax fog-5'/>
        <img src={imgData.mountain_7} className='parallax mountain-7'/>
        <div className="text parallax">
            <h2>DevLink</h2>
            <h1>Muhammad</h1>
        </div>
        <img src={imgData.mountain_6} className='parallax mountain-6'/>
        <img src={imgData.fog_4} className='parallax fog-4'/>
        <img src={imgData.mountain_5} className='parallax mountain-5'/>
        <img src={imgData.fog_3} className='parallax fog-3'/>
        <img src={imgData.mountain_4} className='parallax mountain-4'/>
        <img src={imgData.mountain_3} className='parallax mountain-3'/>
        <img src={imgData.fog_2} className='parallax fog-2'/>
        <img src={imgData.mountain_2} className='parallax mountain-2'/>
        <img src={imgData.mountain_1} className='parallax mountain-1'/>
        <img src={imgData.sun_rays} className='sun-rays'/>
        <img src={imgData.black_shadow} className='black-shadow'/>
        <img src={imgData.fog_1} className='parallax fog-1'/>

        
    </main>
  )
}

export default Main