import { Link, useLocation } from "react-router-dom"

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="main-nav">
            <Link
                to="/"
                className={location.pathname === "/" ? "active" : ""}
            >
                Home
            </Link>
            <Link
                to="/dizionario"
                className={location.pathname === "/dizionario" ? "active" : ""}
            >
                Dizionario Web
            </Link>
            <Link
                to="/controllo-email"
                className={location.pathname === "/controllo-email" ? "active" : ""}
            >
                Controllo Email
            </Link>
            <Link
                to="/pratiche"
                className={location.pathname === "/pratiche" ? "active" : ""}
            >
                Pratiche Amministrative
            </Link>
        </nav>
    )
}

export default Navbar;