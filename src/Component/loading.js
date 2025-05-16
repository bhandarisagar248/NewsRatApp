import React, { Component } from "react";
import loader from "../Loader.svg"
 export default class Loading extends Component{
render(){


    return(
        <>
       <div className="text-center" >
        <img src={loader} alt="loading"></img> 

       </div>
        
        </>
    );
}

    
 }