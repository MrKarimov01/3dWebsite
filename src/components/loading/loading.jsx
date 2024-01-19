import React from 'react'
import "./loading.scss"
import LoadingGif from "./../../../public/loading.gif"


const Loading = (parans) => {
    console.log(parans.text);

    
  return (
    <div className='Loding_cup' style={parans.text?{display:"flex"}:{display:"none"}}>
        <img src={LoadingGif} width={"200px"} alt="" />
    </div>
  )
}

export default Loading