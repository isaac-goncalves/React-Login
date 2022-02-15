import React from "react";
import { Route, Routes } from "react-router-dom";
import UserCrud from "../components/users/UserCrud";
import Home from "../components/home/Home";

export default props => (
    <Routes>
    <Route exact path='/' element={<Home/>} />
    <Route path='/users' element={<UserCrud/>} />
    <Route path='*' element={<Home/>} /> 
    </Routes>
);