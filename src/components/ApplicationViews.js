import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";

import { CustomerProvider } from "./customers/CustomerProvider";

import { DocumentProvider } from "./documents/DocumentProvider";
import { DocumentList } from "./documents/DocumentList";

export const ApplicationViews = () => {

    return (
    <DocumentProvider>
    <CustomerProvider>
        <Routes>
            <Route path="/" element={<Home />} />

        </Routes>
    </CustomerProvider>
    </DocumentProvider>
    )
}

//how to call multiple function <Route path="/" element={<><Home /><DocumentList/></>} />