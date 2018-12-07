import React,{Component} from 'react';


const App=({children})=>{
    console.log("children",children)
    return(
        <div className="container">{children}</div>
    );
}

export default App;