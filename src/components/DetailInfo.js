import { useState } from "react"
function DetailInfo(props){
    const [upvote, setUpvote]=useState(9210)
    const [dowVote, setDowVote]=useState(185)
    function handleUpvote(){
        setUpvote((correntVal)=>correntVal+1)
    }
    function handleDownVote(){
        setDowVote((correntVal)=>correntVal-1)
    }
    return (
        <div>
            <h1>{props.data.title}</h1>
            <h2>{props.data.views} | {props.data.createdAt}</h2>
            <button onClick={handleUpvote}>{upvote} "👍"</button>
            <button onClick={handleDownVote}>{dowVote} "👎"</button>
        </div>
    )
}

export default DetailInfo