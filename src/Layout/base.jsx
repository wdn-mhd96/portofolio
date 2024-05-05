import React from "react";
import Header from "./header";

export default function Base({children}) {
    return (
        <div className="container base">
            <Header />
            {children}
        </div>

    )
}