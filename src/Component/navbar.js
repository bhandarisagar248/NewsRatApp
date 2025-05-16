import React,{Component} from "react";
import {
  Link
} from "react-router-dom";





export default class Navbar extends Component{

 render(){

     
     return(
         <>    
         
        <nav className="navbar fixed-top  navbar-dark bg-dark navbar-expand-lg" style={{backgroundColor:' #e3f2fd'}}>
  <div className="container-fluid">
  <a className="navbar-brand" href="/">NewsRat</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
          
    <li className="nav-item">
    <a className="nav-link active" aria-current="page" href="/">Home</a>
    </li>
    <li className="nav-item dropdown">
    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          

          <ul className="dropdown-menu">

            <li><Link  to="/business" className="dropdown-item">Business</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/health">Health</Link></li>
            <li><Link className="dropdown-item" to="/science">Science</Link></li>
            <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
            <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
            <li><Link className="dropdown-item" to="/politics">Politics</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">General</Link></li>
            </ul>
            </li>
    <li className="nav-item">
    <Link className="nav-link" to="/about">About Us</Link>
    </li>
      
    
            </ul>
            {/* <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </div>
            </div>
            </nav>
            </>
        )
    }
}   
