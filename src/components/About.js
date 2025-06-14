import NavBar from "./NavBar";
import Header from "./Header";

function About() {
    return (
        <div>
            <Header />
            <NavBar />
            <h1 className="component-title">About the WJHS Band Program</h1>
            <p>This site is under construction. You can navigate to the Home and Repertoire List pages
                by clicking on the links in the navigation bar above.</p>
        </div>
    );
}

export default About;