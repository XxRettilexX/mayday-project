const Home = () => {
    return (
        <div className="home-page">
            <h2>Benvenuto in MayDay</h2>
            <p>Il tuo assistente digitale per navigare nel mondo online in sicurezza e semplicità.</p>

            <div className="features-grid">
                <div className="feature-card">
                    <h3>📚 Dizionario Web</h3>
                    <p>Impara il significato dei termini più usati su internet in linguaggio semplice.</p>
                </div>

                <div className="feature-card">
                    <h3>📧 Controllo Email</h3>
                    <p>Verifica la sicurezza delle tue email e impara a riconoscere le truffe.</p>
                </div>

                <div className="feature-card">
                    <h3>📋 Pratiche Amministrative</h3>
                    <p>Guide passo-passo per le procedure online più comuni come SPID, PEC e bonus.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;