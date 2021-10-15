import { useState } from "react";

import video from "../data/video.js";
import DetailInfo from "./DetailInfo.js";
import ShowHideButton from "./ShowHideButton.js";
import Search from "./Search.js";

function App() {
  
  const [search,setSearch]=useState("")
  const[commentList,setCommentList]=useState(video)
  
  function handleSearch(e){
    setSearch(e.target.value)
    const searchByName=commentList.comments.filter(item=>item.user.includes(e.target.value))
    setCommentList(searchByName)
  
  }


  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
      <DetailInfo data={video}/>
      <Search search={search} handleSearch={handleSearch}/>
      <ShowHideButton data={commentList}/>
    </div>
  );
}

export default App;
