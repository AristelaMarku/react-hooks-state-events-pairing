
function Comments({commensList}){
   console.log(commensList)
     const commentToShow= commensList.comments.map((item)=>{
         return(
             <div>
             <p>{item.comment}</p>
             <button>👍</button>
             <button>👎</button>
             </div>
         )
     
     })
     console.log(commentToShow)
     return(
       <p>{commentToShow}</p>
      
    )
}

export default Comments