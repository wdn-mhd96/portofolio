import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Base({children}) {
    return (
        <div className="container base">
            <Header />
            {children}
            <Footer />
        </div>

    )
}