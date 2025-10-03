
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { toggleDarkMode } from "../../utils/theme";
import "./ThemeToggle.css"

const ThemeToggle = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');

    return (
        <div className="theme-toggle">
            <button
                className="theme-toggle-btn"
                onClick={toggleDarkMode}
                aria-label={`Passa alla modalità ${currentTheme === 'dark' ? 'chiara' : 'scura'}`}
            >
                <FontAwesomeIcon
                    icon={currentTheme === 'dark' ? faSun : faMoon}
                    className="theme-icon"
                />
            </button>
        </div>
    );
};

export default ThemeToggle;