import React, { useContext,useEffect } from "react";
import { CustomerContext } from "./customers/CustomerProvider";


function Welcome (props) {
    return <p> Welcome, {props.firstName}</p>
}

export const Home = () => {
    const { customers, getCustomers } = useContext(CustomerContext)
    useEffect(() => {
        console.log("users", customers)
        getCustomers()
    
      }, [])
   return ( 
     <>
    
    <aside>
        <Welcome name={customers.find(user => user.id === +localStorage.activeUser)}/>
       
    </aside>

    </>
   )
}

//above is the same as export const Home = () => (<Welcome name="customer"/>)