import React from "react";
import "./App.css"
import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"
import Footer from "../components/templates/Footer"
import Main from "../components/templates/Main"

export default props => 
    <div className="app">
        <Logo />
        <Nav/>
        <Main />
       <Footer />
    </div>
