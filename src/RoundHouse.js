import React, { useState } from "react";
import  NavBar  from "./components/nav/NavBar";
import { ApplicationViews } from "./components/ApplicationViews";
import "./RoundHouse.css";
import { Routes, Route, Navigate } from "react-router";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";
import { Logout} from "./components/auth/Logout";

export const RoundHouse = () => {
    const [loggedin, setLoggedin] = useState(false);

    const changeState = (bool) => setLoggedin(bool);

    if (localStorage.getItem("activeUser")){
        return (
            <>
                <NavBar />
                <ApplicationViews />
                <Logout />
                
            </>
        );
    } else {
        return (
            <Routes>
                <Route path="/" element={<Navigate to="login" />} />
                <Route path="/login" element={<Login setLoggedin={changeState} />} />
                <Route path="/register" element={<Register setLoggedin={changeState} />} />
            </Routes>
       );
    }
};

