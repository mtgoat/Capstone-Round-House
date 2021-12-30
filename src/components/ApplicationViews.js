import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";

import { CustomerProvider } from "./customers/CustomerProvider";
import { CategoryProvider } from "./categories/CategoryProvider";

import { DocumentProvider } from "./documents/DocumentProvider";
import { DocumentForm } from "./documents/DocumentForm";

import { SituationProvider } from "./situations/SituationProvider";

import { Search } from "./search/Search";

export const ApplicationViews = () => {

    return (
    <DocumentProvider>
        <SituationProvider>
            <CategoryProvider>
                <CustomerProvider>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="documents" element={<Home />} />
                        <Route path="documents/create/*" element={<DocumentForm />} />
                        <Route path="documents/edit/:documentId/*" element={< DocumentForm />}/>
                        <Route path="search" element={<Search />} />
                    </Routes>
                </CustomerProvider>
            </CategoryProvider>
        </SituationProvider>
    </DocumentProvider>
    )
}

//how to call multiple function <Route path="/" element={<><Home /><DocumentList/></>} />