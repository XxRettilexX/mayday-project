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

const Navbar = () => {
    const [isCompressed, setIsCompressed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);
    const location = useLocation();
    const navbarRef = useRef<HTMLElement>(null);
    const lastScrollY = useRef(0);
    const scrollThreshold = 150; // Soglia più alta per la compressione

    // Effetto per gestire lo scroll con comportamento migliorato
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Segnala che l'utente ha iniziato a scrollare
            if (currentScrollY > 10 && !hasScrolled) {
                setHasScrolled(true);
            }

            // Calcola la differenza di scroll
            const scrollDifference = currentScrollY - lastScrollY.current;

            // Se stiamo scorrendo verso il basso e abbiamo superato la soglia
            if (scrollDifference > 0 && currentScrollY > scrollThreshold && !isCompressed) {
                setIsCompressed(true);
                setIsMenuOpen(false);
            }
            // Se stiamo scorrendo verso l'alto OPPURE siamo molto in alto
            else if (scrollDifference < -50 || currentScrollY < 50) {
                // Solo se siamo abbastanza in alto o stiamo scrollando decisamente verso l'alto
                if (isCompressed) {
                    setIsCompressed(false);
                }
            }

            lastScrollY.current = currentScrollY;
        };

        // Throttle per performance
        let ticking = false;
        const throttledScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', throttledScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', throttledScroll);
        };
    }, [isCompressed, hasScrolled]);

    // Chiudi il menu quando si clicca fuori
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    // Chiudi il menu quando si cambia pagina
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    // Reset dello stato quando si torna in cima alla pagina
    useEffect(() => {
        const handleScrollToTop = () => {
            if (window.scrollY === 0) {
                setIsCompressed(false);
                setHasScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScrollToTop, { passive: true });
        return () => window.removeEventListener('scroll', handleScrollToTop);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

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
            {/* Navbar Espansa - Visibile quando non compressa */}
            <div className="nav-content">
                {!isCompressed ? (
                    <div className="nav-links">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                            >
                                <FontAwesomeIcon icon={item.icon} className="nav-icon" />
                                <span className="nav-label">{item.label}</span>
                            </Link>
                        ))}
                    </div>
                ) : (
                    /* Navbar Compressa - Hamburger Menu */
                    <div className="compressed-nav">
                        <button
                            className="hamburger-button"
                            onClick={toggleMenu}
                            aria-label={isMenuOpen ? "Chiudi menu" : "Apri menu"}
                            aria-expanded={isMenuOpen}
                        >
                            <FontAwesomeIcon
                                icon={isMenuOpen ? faTimes : faBars}
                                className="hamburger-icon"
                            />
                            <span className="hamburger-text">Menu</span>
                        </button>

                        {/* Menu a tendina */}
                        <div className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
                            <div className="dropdown-header">
                                <h3>Navigazione</h3>
                            </div>
                            {navItems.map((item) => (
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

            {/* Overlay per chiudere il menu */}
            {isMenuOpen && (
                <div
                    className="menu-overlay"
                    onClick={() => setIsMenuOpen(false)}
                    aria-hidden="true"
                />
            )}
        </nav>
    );
};

export default Navbar;