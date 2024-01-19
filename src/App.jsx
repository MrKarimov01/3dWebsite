import React, { useState } from "react"
import Header from "./components/header/Header"
import Main from "./components/main/Main"
import Loading from "./components/loading/loading"
function App() {
  const [block,setBlock]=useState(true)
  setTimeout(()=>{
    setBlock(false)
  },3500)
  return (
    <div className="container">
      <Header/>
      <Main/>
      <Loading text={block}/>
    </div>
  )
}

export default App
