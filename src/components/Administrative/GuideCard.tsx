import React from "react";
import type { Guide } from "../../types/administrative";

type Props = {
    guide: Guide;
    onOpen: (g: Guide) => void;
};

const GuideCard: React.FC<Props> = ({ guide, onOpen }) => {
    return (
        <article
            className="guide-card clickable"
            aria-labelledby={`guide-title-${guide.id}`}
            tabIndex={0}
            role="button"
            onClick={() => onOpen(guide)}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onOpen(guide);
                }
            }}
            style={{ cursor: "pointer" }}
        >
            <h3 id={`guide-title-${guide.id}`} style={{ fontSize: "20px", margin: 0 }}>
                {guide.titolo}
            </h3>
            <p style={{ fontSize: "18px", margin: "8px 0" }}>
                Difficoltà: {guide.difficolta} • {guide.tempoStimato} min
            </p>
            <p style={{ fontSize: "18px", margin: "8px 0", color: "var(--muted)" }}>
                {guide.prerequisiti.slice(0, 3).join(", ")}
                {guide.prerequisiti.length > 3 ? "…" : ""}
            </p>
            <div style={{ marginTop: 8 }}>
                <button
                    className="btn small primary"
                    aria-label={`Apri guida ${guide.titolo}`}
                    onClick={(ev) => {
                        ev.stopPropagation();
                        onOpen(guide);
                    }}
                >
                    Apri guida
                </button>
            </div>
        </article>
    );
};

export default GuideCard;
