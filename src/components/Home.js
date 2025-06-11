import { useState, useEffect } from "react";
import NavBar from "./NavBar.js";

function Home() {


    return (
        <div>
            <NavBar />
            <h1>Welcome to the Home Page!</h1>
            <p>This is the default page. You can navigate to the About and Repertoire List pages by clicking on the links in the navigation bar.</p>
        </div>
    );
}

export default Home;
