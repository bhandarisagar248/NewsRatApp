
import './App.css';
import React,  { Component } from 'react';
import Navbar from './Component/navbar';
import News  from './Component/News';
import {
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar"; 
import About from './Component/About';
// import { useState } from "react";


export default class App extends Component{

  apikey=process.env.REACT_APP_NEWS_API;
  // apikey='a554737285f247de9724b0459510d06b'
  state={
    progress:0
  }
setProgress=(progresses)=>{
  this.setState({progress:progresses});
}

render(){



  return(
    <>
    <div>

<Navbar/>

<LoadingBar
    color="#f11946"
    progress={this.state.progress}
    />


  <Routes>
          <Route exact path="/" element={<News ApiKey={this.apikey} setProgress={this.setProgress} key="general" PageSize={9} category="general"/>}></Route>

      <Route exact path='/about' element={<About/>}></Route>
          <Route exact path="/business"  element={<News ApiKey={this.apikey} setProgress={this.setProgress} key="business" PageSize={9} category="business"/>}></Route>
          <Route exact path="/entertainment"  element={<News ApiKey={this.apikey} setProgress={this.setProgress} key="entertainment" PageSize={9} category="entertainment"/>}></Route>
          <Route exact path="/health" element={ <News ApiKey={this.apikey} setProgress={this.setProgress} key="health" PageSize={9} category="health"/>}></Route>
          <Route exact path="/science"  element={<News ApiKey={this.apikey} setProgress={this.setProgress} key="science" PageSize={9} category="science"/>}></Route>
          <Route exact path="/technology"  element={<News ApiKey={this.apikey} setProgress={this.setProgress} key="technology" PageSize={9} category="technology"/>}></Route>
          <Route exact path="/sports"  element={<News ApiKey={this.apikey} setProgress={this.setProgress} key="sports" PageSize={9} category="sports"/>}></Route>
          <Route exact path="/politics" element={ <News ApiKey={this.apikey} setProgress={this.setProgress} key="politics" PageSize={9} category="politics"/>}></Route>
          
          

        </Routes>


    </div>
    </>
  )
}


}
