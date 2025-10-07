import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faTimes,
    faHome,
    faBook,
    faEnvelope,
    faFileAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"

const Navbar = () => {
    const [isCompressed, setIsCompressed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    const location = useLocation();
    const navbarRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);
    const scrollThreshold = 150;

    // Gestione scroll e compressione navbar
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;


            if (currentScrollY > lastScrollY.current && currentScrollY > scrollThreshold) {
                setIsCompressed(true);
            }

            else if (currentScrollY < lastScrollY.current || currentScrollY <= scrollThreshold) {
                setIsCompressed(false);
            }

            setHasScrolled(currentScrollY > scrollThreshold);
            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navItems = [
        { path: "/", icon: faHome, label: "Home" },
        { path: "/dizionario", icon: faBook, label: "Dizionario" },
        { path: "/controllo-email", icon: faEnvelope, label: "Controllo Email" },
        { path: "/pratiche", icon: faFileAlt, label: "Pratiche" }
    ];

    return (
        <nav
            ref={navbarRef}
            className={`main-nav ${isCompressed ? 'compressed' : 'expanded'} ${isMenuOpen ? 'menu-open' : ''} ${hasScrolled ? 'scrolled' : ''}`}
        >
            <div className="nav-content">
                {!isCompressed ? (
                    <div className="nav-links">
                        {navItems.map(item => (
                            <Link key={item.path} to={item.path} className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}>
                                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                                <span className="nav-label">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="compressed-nav">
                        <button
                            className="hamburger-button"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} className="hamburger-icon" />
                            <span className="hamburger-text">Menu</span>
                        </button>

                        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                            {navItems.map(item => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    className={`dropdown-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    <FontAwesomeIcon icon={item.icon} className="dropdown-icon" />
                                    <span className="dropdown-label">{item.label}</span>
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
