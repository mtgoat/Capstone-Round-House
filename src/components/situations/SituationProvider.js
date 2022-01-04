// Purpose: to provide situation api for adding and updating documents 
import React, { useState, createContext } from "react";

// The context is imported and used by individual components that need data
export const SituationContext = createContext()

// This component establishes what data can be used.
export const SituationProvider = (props) => {
    const [situations, setSituations] = useState([])

    const getSituations = () => {
        return fetch("http://localhost:8088/situations")
        .then(res =>  res.json())
        .then(setSituations)
    }

    const addSituation = situationObj => {
        return fetch("http://localhost:8088/situations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(situationObj)
        })
        .then(getSituations)
    }

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <SituationContext.Provider value={{
            situations, getSituations, addSituation
        }}>
            {props.children}
        </SituationContext.Provider>
    )
}
