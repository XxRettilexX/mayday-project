import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faArrowUp
} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"

const Footer = () => {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="site-footer">
            <div className="footer-container">
                {/* Sezione contatti */}
                <div className="footer-section">
                    <h4>Contatti</h4>
                    <p><FontAwesomeIcon icon={faEnvelope} /> info@tuosito.com</p>
                    <p><FontAwesomeIcon icon={faPhone} /> +39 123 456 789</p>
                </div>

                {/* Sezione social */}
                <div className="footer-section">
                    <h4>Seguici</h4>
                    <div className="social-icons">
                        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>

                {/* Sezione link rapidi */}
                <div className="footer-section">
                    <h4>Link utili</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/dizionario">Dizionario</a></li>
                        <li><a href="/controllo-email">Controllo Email</a></li>
                        <li><a href="/pratiche">Pratiche</a></li>
                    </ul>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="footer-bottom">
                <p>&copy; 2025 Vito Strisciuglio. Tutti i diritti riservati.</p>
                <button className="scroll-top" onClick={scrollToTop} aria-label="Torna su">
                    <FontAwesomeIcon icon={faArrowUp} />
                </button>
            </div>
        </footer>
    );
};

export default Footer;
