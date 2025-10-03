import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBook,
    faEnvelope,
    faFileAlt,
    faShieldAlt,
    faGraduationCap,
    faHandsHelping
} from "@fortawesome/free-solid-svg-icons";
import "./Home.css"
const Home = () => {
    const navigate = useNavigate();

    const features = [
        {
            icon: faBook,
            title: "Dizionario Web",
            description: "Impara il significato dei termini più usati su internet con spiegazioni semplici e esempi pratici.",
            path: "/dizionario",
            color: "#2563eb",
            gradient: "linear-gradient(135deg, #2563eb, #3b82f6)"
        },
        {
            icon: faEnvelope,
            title: "Controllo Email",
            description: "Verifica la sicurezza delle tue email e impara a riconoscere truffe e tentativi di phishing.",
            path: "/controllo-email",
            color: "#ea580c",
            gradient: "linear-gradient(135deg, #ea580c, #f97316)"
        },
        {
            icon: faFileAlt,
            title: "Pratiche Amministrative",
            description: "Guide passo-passo per procedure online come SPID, PEC, INPS e bonus. Semplici e sicure.",
            path: "/pratiche",
            color: "#16a34a",
            gradient: "linear-gradient(135deg, #16a34a, #22c55e)"
        },
        {
            icon: faShieldAlt,
            title: "Sicurezza Online",
            description: "Consigli pratici per proteggerti da truffe, virus e proteggere i tuoi dati personali.",
            path: "/sicurezza",
            color: "#dc2626",
            gradient: "linear-gradient(135deg, #dc2626, #ef4444)"
        },
        {
            icon: faGraduationCap,
            title: "Video Tutorial",
            description: "Impara guardando! Video semplici che mostrano come usare i servizi digitali passo dopo passo.",
            path: "/tutorial",
            color: "#7c3aed",
            gradient: "linear-gradient(135deg, #7c3aed, #8b5cf6)"
        },
        {
            icon: faHandsHelping,
            title: "Assistenza",
            description: "Hai bisogno di aiuto? Contatta il nostro servizio di supporto dedicato agli anziani.",
            path: "/assistenza",
            color: "#0891b2",
            gradient: "linear-gradient(135deg, #0891b2, #06b6d4)"
        }
    ];

    const handleFeatureClick = (path: string) => {
        navigate(path);
    };

    const handleQuickAction = (action: string) => {
        switch (action) {
            case 'emergency':
                alert("📞 Chiama il 112 in caso di emergenza\n\nPer assistenza digitale:\n📧 assistenza@mayday.it\n📞 800-123-456");
                break;
            case 'scam-report':
                navigate("/controllo-email");
                break;
            case 'quick-guide':
                navigate("/pratiche");
                break;
        }
    };

    return (
        <div className="home-page fade-in">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Benvenuto in <span className="highlight-text">MayDay</span>
                    </h1>
                    <p className="hero-subtitle">
                        Il tuo assistente digitale personale per navigare in internet con <strong>sicurezza e semplicità</strong>
                    </p>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number">1000+</span>
                            <span className="stat-label">Anziani aiutati</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">50+</span>
                            <span className="stat-label">Guide disponibili</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number">24/7</span>
                            <span className="stat-label">Supporto</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="quick-actions-section">
                <h2 className="section-title">Azioni Rapide</h2>
                <div className="quick-actions-grid">
                    <button
                        className="quick-action-card emergency"
                        onClick={() => handleQuickAction('emergency')}
                    >
                        <div className="action-icon">
                            <FontAwesomeIcon icon={faShieldAlt} />
                        </div>
                        <div className="action-content">
                            <h3>Aiuto Immediato</h3>
                            <p>Contatti di emergenza e supporto urgente</p>
                        </div>
                    </button>

                    <button
                        className="quick-action-card scam-alert"
                        onClick={() => handleQuickAction('scam-report')}
                    >
                        <div className="action-icon">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </div>
                        <div className="action-content">
                            <h3>Controlla un'Email</h3>
                            <p>Verifica subito se un'email è sicura</p>
                        </div>
                    </button>

                    <button
                        className="quick-action-card guide"
                        onClick={() => handleQuickAction('quick-guide')}
                    >
                        <div className="action-icon">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </div>
                        <div className="action-content">
                            <h3>Guide Veloci</h3>
                            <p>Procedimenti passo-passo immediati</p>
                        </div>
                    </button>
                </div>
            </section>

            {/* Main Features Grid */}
            <section className="features-section">
                <h2 className="section-title">I Nostri Servizi</h2>
                <p className="section-subtitle">
                    Tutti gli strumenti di cui hai bisogno in un unico posto, pensati specificamente per te
                </p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="feature-card interactive"
                            onClick={() => handleFeatureClick(feature.path)}
                            style={{
                                '--card-color': feature.color,
                                '--card-gradient': feature.gradient
                            } as React.CSSProperties}
                        >
                            <div className="feature-icon">
                                <FontAwesomeIcon
                                    icon={feature.icon}
                                    style={{ color: feature.color }}
                                />
                            </div>
                            <div className="feature-content">
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                            <div className="feature-arrow">
                                <FontAwesomeIcon icon={faHandsHelping} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Trust Section */}
            <section className="trust-section">
                <div className="trust-content">
                    <h2>Naviga in Sicurezza con Noi</h2>
                    <div className="trust-features">
                        <div className="trust-item">
                            <FontAwesomeIcon icon={faShieldAlt} className="trust-icon" />
                            <div>
                                <h4>100% Sicuro</h4>
                                <p>Nessun dato personale viene memorizzato</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <FontAwesomeIcon icon={faGraduationCap} className="trust-icon" />
                            <div>
                                <h4>Linguaggio Semplice</h4>
                                <p>Spiegazioni chiare senza termini tecnici</p>
                            </div>
                        </div>
                        <div className="trust-item">
                            <FontAwesomeIcon icon={faHandsHelping} className="trust-icon" />
                            <div>
                                <h4>Supporto Umano</h4>
                                <p>Assistenza telefonica dedicata</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;