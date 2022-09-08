import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Auth from "./Auth";
import Chat from './Chat'
import Navbar from './components/Navbar'


function AuthWrap() {
  return (
    <div>
        <Router>
          <Navbar />
            <Auth />
            <Chat />
      
        </Router>
 </div>
  )
}

export default AuthWrap
    
