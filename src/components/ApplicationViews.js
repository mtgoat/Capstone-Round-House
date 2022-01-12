import React from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "./Home";

import { CustomerProvider } from "./customers/CustomerProvider";
import { CategoryProvider } from "./categories/CategoryProvider";

import { DocumentProvider } from "./documents/DocumentProvider";
import { DocumentForm } from "./documents/DocumentForm";
import { DocumentSearch} from "./search/DocumentSearch"
import { DocumentSearchList } from "./search/DocumentSearchList";

import { SituationProvider } from "./situations/SituationProvider";

import { DocumentListProvider } from "./documentLists/DocumentListProvider";
import { DocumentListHome } from "./documentLists/DocumentListHome";

import { About } from "./about/About";

export const ApplicationViews = () => {

    return (
    <DocumentProvider>
        <SituationProvider>
            <CategoryProvider>
                <CustomerProvider>
                    <DocumentListProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="documents" element={<Home />} />
                            <Route path="documents/create/*" element={<DocumentForm />} />
                            <Route path="documents/edit/:documentId/*" element={< DocumentForm />}/>
                            <Route path="search" element={<><DocumentSearch /><DocumentSearchList /></>} />
                            <Route path="suggested" element={<DocumentListHome />} />
                            <Route path="about" element={<About />} />
                        </Routes>
                    </DocumentListProvider>
                </CustomerProvider>
            </CategoryProvider>
        </SituationProvider>
    </DocumentProvider>
    )
}

//how to call multiple function <Route path="/" element={<><Home /><DocumentList/></>} />