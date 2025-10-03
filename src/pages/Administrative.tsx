import React, { useEffect, useState } from "react";
import GuideCard from "../components/Administrative/GuideCard";
import GuideModal from "../components/Administrative/GuideModal";
import type { Guide } from "../types/administrative";
import { fetchGuides } from "../ services/administrativeService";
import "./Administrative.css"

const Administrative: React.FC = () => {
    const [guides, setGuides] = useState<Guide[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);

    useEffect(() => {
        let mounted = true;
        setLoading(true);
        fetchGuides()
            .then((g) => {
                if (mounted) setGuides(g);
            })
            .finally(() => mounted && setLoading(false));
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <main className="page admin-page" aria-labelledby="admin-title">
            <h1 id="admin-title" style={{ fontSize: "22px" }}>Guide pratiche - MayDay</h1>
            <p style={{ fontSize: "18px" }}>Scegli la pratica che ti interessa. Clicca sulla card per leggere la guida completa.</p>

            {loading ? (
                <p style={{ fontSize: "18px" }}>Caricamento…</p>
            ) : (
                <div className="grid-cards" style={{ marginTop: 12 }}>
                    {guides.map((g) => (
                        <GuideCard key={g.id} guide={g} onOpen={(guide) => setSelectedGuide(guide)} />
                    ))}
                </div>
            )}

            <GuideModal guide={selectedGuide} onClose={() => setSelectedGuide(null)} />
        </main>
    );
};

export default Administrative;
