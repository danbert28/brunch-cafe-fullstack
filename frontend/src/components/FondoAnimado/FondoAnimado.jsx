import "./FondoAnimado.css";

const iconos = [
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M8 8h8v4a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 8V7a4 4 0 0 1 8 0v1" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 14h6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-1",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M4 13c0-3 1.5-5.5 4-6.5 2.2-0.8 4.7-0.8 6.8 0 2.5 1 4 3.5 4 6.5H4Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M7 12h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M7 14h10" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-2",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6 8c0-2.5 2-4.5 4.5-4.5S15 5.5 15 8c0 2.5-4.5 9-4.5 9S6 10.5 6 8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 4V2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9.2 5.8c.7.9 1.8 1.6 2.8 1.6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-3",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M12 4v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-4",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M19 8c0 5-7 11-7 11S5 13 5 8a7 7 0 0 1 14 0Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6c1-1.5 2.5-1.5 3 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-5",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6 8C6 4 10 2 12 2s6 2 6 6c0 4-2 9-6 12C8 17 6 12 6 8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11 9.5h2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-6",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M8 8h8v4a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V8Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M17 8a2 2 0 0 1 0 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-7",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M3 12c0-5 3-9 9-9s9 4 9 9-3 9-9 9-9-4-9-9Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 12h12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M8 15h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-8",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M7 18c1-1.5 2.5-2 4-2s3 0.5 4 2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M5 12c0-3 1.5-5.5 4-6.5 1.5-.7 3.2-.7 4.7 0 2.5 1 4 3.5 4 6.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-9",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M8 7h8v4a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 7V5a4 4 0 0 1 8 0v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-10",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M12 3c-2.8 0-5 2.2-5 5 0 3.7 5 10 5 10s5-6.3 5-10c0-2.8-2.2-5-5-5Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 3v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-11",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <rect x="5" y="6" width="14" height="12" rx="3" fill="none" stroke="currentColor" strokeWidth="1.8" />
                <path d="M5 10h14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M9 6V4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-12",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6 11h12v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M7 11V8a5 5 0 0 1 10 0v3" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-13",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M6 14h12v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-2Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M8 10h8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M10 6h4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-14",
    },
    {
        icon: (
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d="M8 8c0-2 1.7-3.5 4-3.5s4 1.5 4 3.5c0 2.5-4 7-4 7s-4-4.5-4-7Z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                <path d="M12 4v2" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
        ),
        clase: "icono-15",
    },
];

const FondoAnimado = ({ children }) => {
    return (
        <div className="fondo-animado">
            {iconos.map((icono, i) => (
                <span key={i} className={`fondo-animado__icono ${icono.clase}`}>
                    {icono.icon}
                </span>
            ))}
            <div className="fondo-animado__contenido">{children}</div>
        </div>
    );
};

export default FondoAnimado;