import { useState } from "react";
import Comments from "./Comments"

function ShowHideButton({data}){

  const [showHide, setShowHide]=useState(true)

  function handleShowHide(){
      setShowHide((currentVal)=>!currentVal)
  }
    return(
        <div>
        <button onClick={handleShowHide}>{showHide ?"Show Comments":"Hide Comments"}</button>
        {showHide? <Comments commensList={data}/>:null}
        </div>
    )
}

export default ShowHideButton