import React, { useEffect, useRef } from "react";
import type { Guide } from "../../types/administrative";

type Props = {
    guide: Guide | null;
    onClose: () => void;
};

const GuideModal: React.FC<Props> = ({ guide, onClose }) => {
    const modalRef = useRef<HTMLDivElement | null>(null);
    const previouslyFocused = useRef<HTMLElement | null>(null);

    useEffect(() => {
        if (!guide) return;

        // Salva elemento attivo e poi porta il focus nel modal
        previouslyFocused.current = document.activeElement as HTMLElement | null;
        setTimeout(() => {
            modalRef.current?.focus();
        }, 0);

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
            // semplice focus trap: se Tab e ultimo elemento -> ciclo sul primo
            if (e.key === "Tab") {
                const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), textarea, input, [tabindex]:not([tabindex="-1"])'
                );
                if (focusable && focusable.length) {
                    const first = focusable[0];
                    const last = focusable[focusable.length - 1];
                    if (!e.shiftKey && document.activeElement === last) {
                        e.preventDefault();
                        first.focus();
                    } else if (e.shiftKey && document.activeElement === first) {
                        e.preventDefault();
                        last.focus();
                    }
                }
            }
        };

        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden"; // disabilita scroll background

        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
            previouslyFocused.current?.focus();
        };
    }, [guide, onClose]);

    if (!guide) return null;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="modal-overlay"
            onMouseDown={(e) => {
                // click su overlay chiude
                if (e.target === e.currentTarget) onClose();
            }}
        >
            <div
                className="modal"
                ref={modalRef}
                tabIndex={-1}
                style={{ maxWidth: 800 }}
            >
                <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h2 id="modal-title" style={{ fontSize: "22px", margin: 0 }}>{guide.titolo}</h2>
                    <button
                        onClick={onClose}
                        aria-label="Chiudi guida"
                        className="btn small"
                        style={{ marginLeft: 12 }}
                    >
                        Chiudi
                    </button>
                </header>

                <section style={{ marginTop: 12 }}>
                    <p style={{ fontSize: "18px" }}><strong>Tempo stimato:</strong> {guide.tempoStimato} min</p>
                    <p style={{ fontSize: "18px" }}><strong>Prerequisiti:</strong> {guide.prerequisiti.join(", ")}</p>

                    <div style={{ marginTop: 12 }}>
                        {guide.passi.map((p) => (
                            <article key={p.ordine} style={{ marginBottom: 14 }}>
                                <h3 style={{ fontSize: "18px", margin: "6px 0" }}>{p.ordine}. {p.titolo}</h3>
                                <p style={{ fontSize: "18px", margin: "6px 0" }}>{p.descrizione}</p>
                                {p.avvertenze && <p style={{ color: "var(--danger)", fontSize: "18px" }}>Avvertenza: {p.avvertenze}</p>}
                                <p style={{ fontSize: "16px", color: "var(--muted)" }}><em>Verifica: {p.verifica}</em></p>
                            </article>
                        ))}
                    </div>

                    {guide.domandeFrequenti && guide.domandeFrequenti.length > 0 && (
                        <div style={{ marginTop: 12 }}>
                            <h4 style={{ fontSize: "18px" }}>Domande frequenti</h4>
                            <dl>
                                {guide.domandeFrequenti.map((f, i) => (
                                    <div key={i}>
                                        <dt style={{ fontSize: "18px", fontWeight: 600 }}>{f.domanda}</dt>
                                        <dd style={{ fontSize: "18px", marginBottom: 8 }}>{f.risposta}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    )}

                    {guide.contattiSupporto && guide.contattiSupporto.length > 0 && (
                        <div style={{ marginTop: 12 }}>
                            <h4 style={{ fontSize: "18px" }}>Contatti di supporto</h4>
                            <ul>
                                {guide.contattiSupporto.map((c, i) => (
                                    <li key={i} style={{ fontSize: "18px", marginBottom: 6 }}>
                                        <strong>{c.nome}</strong>
                                        {c.telefono ? ` • Tel: ${c.telefono}` : ""}{" "}
                                        {c.link ? <a href={c.link} target="_blank" rel="noreferrer">{c.link}</a> : ""}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
};

export default GuideModal;
