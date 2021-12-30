import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Search = () => {
    const navigate = useNavigate()

    return ( 
        <>
        <p> this is search</p>
        <Button className=" btn-secondary" onClick={()=> {navigate(`/`)}}>Home</Button></>
    )
}