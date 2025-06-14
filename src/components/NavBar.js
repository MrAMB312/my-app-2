import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <nav className="nav-bar">
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/repertoire-list"
                        className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
                    >
                        Repertoire List
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;