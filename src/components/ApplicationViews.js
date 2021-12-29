import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

import { CustomerProvider } from "./customers/CustomerProvider";

export const ApplicationViews = () => {

    return (

    <CustomerProvider>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </CustomerProvider>
    )
}