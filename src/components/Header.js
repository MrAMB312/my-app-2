import React from "react";
import bandlogo from "../bandlogo.png"
function Header() {
    return (
        <header className="app-header">
            <img src={bandlogo} alt="WJHS Band Logo" className="logo" />
            <h1 className="app-title">
                Wilmette Junior High School<br />Band Program
            </h1>
        </header>
    )
}

export default Header;