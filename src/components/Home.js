import NavBar from "./NavBar.js";
import Header from "./Header.js";

function Home() {
    return (
        <div>
            <Header />
            <NavBar />
            <h1 className="component-title">Welcome to the WJHS Band Home Page!</h1>
            <p>This site is under construction. You can navigate to the About and Repertoire List pages
                by clicking on the links in the navigation bar above.</p>
        </div>
    );
}

export default Home;
