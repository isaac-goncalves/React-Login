import React from "react";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Logo from "../components/templates/Logo"
import Nav from "../components/templates/Nav"
import Footer from "../components/templates/Footer"
import Main from "../components/templates/Main"

export default props => 
    <div className="app">
        <Logo />
        <Nav/>
        <Main icon="home" title="Início" subtitle="Segundo Projeto do capitulo de React."/>
       <Footer />
    </div>
