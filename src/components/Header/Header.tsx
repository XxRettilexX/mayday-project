interface HeaderProps {
    title?: string;
    subtitle?: string;
}

const Header = ({
    title = "MayDay - Aiuto per Anziani",
    subtitle = "Servizi digitali semplificati"
}: HeaderProps) => {
    return (
        <header className="app-header">
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </header>
    )
}

export default Header; // Aggiungi export default