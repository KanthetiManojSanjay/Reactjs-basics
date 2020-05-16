import React, { useState } from 'react'

function Sample(){
 const [name,setState] =useState("Jack")

 return (
     <div>
        Your name is {name}
        <button onClick={()=>setState("jill")}>Change</button>
     </div> 
 )
}

export default Sample