import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faHandsHelping,
    faShieldAlt,
    faHeart,
    faUsers
} from "@fortawesome/free-solid-svg-icons";

interface HeaderProps {
    title?: string;
    subtitle?: string;
    showIcons?: boolean;
}

const Header = ({
    title = "MayDay - Aiuto per Anziani",
    subtitle = "Servizi digitali semplificati e sicuri per la terza età",
    showIcons = true
}: HeaderProps) => {
    return (
        <header className="app-header-light">
            <div className="header-content">
                <div className="header-text">
                    <h1 className="header-title">
                        <span className="title-main">{title}</span>
                        <span className="title-accent">MayDay</span>
                    </h1>
                    <p className="header-subtitle">{subtitle}</p>
                </div>

                {showIcons && (
                    <div className="header-icons">
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faHandsHelping} className="header-icon" />
                            <span className="icon-label">Supporto</span>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faShieldAlt} className="header-icon" />
                            <span className="icon-label">Sicuro</span>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faHeart} className="header-icon" />
                            <span className="icon-label">Empatico</span>
                        </div>
                        <div className="icon-item">
                            <FontAwesomeIcon icon={faUsers} className="header-icon" />
                            <span className="icon-label">Sociale</span>
                        </div>
                    </div>
                )}
            </div>

            {/* Elemento decorativo */}
            <div className="header-decoration">
                <div className="decoration-line"></div>
                <div className="decoration-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </header>
    )
}

export default Header;