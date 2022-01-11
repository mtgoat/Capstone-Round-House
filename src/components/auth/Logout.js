// Purpose: log out

import React, { useRef } from "react";
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { Form, Button, Row, Col, Image } from 'react-bootstrap';


export const Logout = (props) =>{
    const navigate = useNavigate()
    const email = useRef()
    const existDialog = useRef()

    const handleLogout = (e) => {
        e.preventDefault()

        localStorage.removeItem("react_Roundhouse_user")
                window.location.reload(false);
                navigate("/");
                window.location.reload(false); 
        }

    return (
        <>
        <Button id="logout-button" className="btn-success" onClick={handleLogout}>Log Out</Button>
        </>
    )
}