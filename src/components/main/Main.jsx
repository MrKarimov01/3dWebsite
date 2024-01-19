import React, { useEffect, useRef, useState } from 'react'
import "./Main.scss"
import background from "./../../Assets/img/background.png"
import fog7 from "./../../Assets/img/fog_7.png"
import fog6 from "./../../Assets/img/fog_6.png"
import fog5 from "./../../Assets/img/fog_5.png"
import fog4 from "./../../Assets/img/fog_4.png"
import fog3 from "./../../Assets/img/fog_3.png"
import fog2 from "./../../Assets/img/fog_2.png"
import fog1 from "./../../Assets/img/fog_1.png"
import mountain10 from "./../../Assets/img/mountain_10.png"
import mountain9 from "./../../Assets/img/mountain_8.png"
import mountain8 from "./../../Assets/img/mountain_7.png"
import mountain7 from "./../../Assets/img/mountain_9.png"
import mountain6 from "./../../Assets/img/mountain_6.png"
import mountain5 from "./../../Assets/img/mountain_5.png"
import mountain4 from "./../../Assets/img/mountain_4.png"
import mountain3 from "./../../Assets/img/mountain_3.png"
import mountain2 from "./../../Assets/img/mountain_2.png"
import mountain1 from "./../../Assets/img/mountain_1.png"
import sun_rays from "./../../Assets/img/sun_rays.png"
import black_shadow from "./../../Assets/img/black_shadow.png"



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
        <img src={background} className='parallax bg-img'/>
        <img src={fog7} className='parallax fog-7'/>
        <img src={mountain10} className='parallax mountain-10'/>
        <img src={fog6} className='parallax fog-6'/>
        <img src={mountain9} className='parallax mountain-9'/>
        <img src={mountain8} className='parallax mountain-8'/>
        <img src={fog5} className='parallax fog-5'/>
        <img src={mountain7} className='parallax mountain-7'/>
        <div className="text parallax">
            <h2>DevLink</h2>
            <h1>Muhammad</h1>
        </div>
        <img src={mountain6} className='parallax mountain-6'/>
        <img src={fog4} className='parallax fog-4'/>
        <img src={mountain5} className='parallax mountain-5'/>
        <img src={fog3} className='parallax fog-3'/>
        <img src={mountain4} className='parallax mountain-4'/>
        <img src={mountain3} className='parallax mountain-3'/>
        <img src={fog2} className='parallax fog-2'/>
        <img src={mountain2} className='parallax mountain-2'/>
        <img src={mountain1} className='parallax mountain-1'/>
        <img src={sun_rays} className='sun-rays'/>
        <img src={black_shadow} className='black-shadow'/>
        <img src={fog1} className='parallax fog-1'/>

        
    </main>
  )
}

export default Main