import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
         <li className="navbar__item active">
           <Link className="navbar__link" to="/">Dashboard/Home</Link>
         </li>
         
         <li className="navbar__item">
           <Link className="navbar__link" to="/lists">List of All the Documents</Link>
         </li>
         
         <li className="navbar__item">
           <Link className="navbar__link" to="/newDoc">Add New Document</Link>
         </li>
   
         <li className="navbar__item">
           <Link className="navbar__link" to="/search">Search</Link>
         </li>
     
        </ul>
    )
}