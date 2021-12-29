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

        localStorage.removeItem("activeUser")
                
        navigate("/") 
        window.location.reload(false);
        }

    return (
        <>
        <Button id="logout-button" className=" btn-secondary" onClick={handleLogout}>Log Out</Button>
        </>
    )
}