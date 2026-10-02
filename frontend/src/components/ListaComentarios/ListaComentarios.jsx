import { useState } from "react";
import testimonios from "../../data/testimonios.json";
import "./ListaComentarios.css";

/* ── Estrellas ── */
const Estrellas = ({ calificacion }) => (
    <div className="lista-comentarios__estrellas" aria-label={calificacion + " de 5 estrellas"}>
    {Array.from({ length: 5 }, (_, i) => (
        <span
        key={i}
        className={"lista-comentarios__estrella " + (i < calificacion ? "lista-comentarios__estrella--llena" : "lista-comentarios__estrella--vacia")}
        aria-hidden="true"
        >
        ★
        </span>
    ))}
    </div>
);

const ListaComentarios = ({ nuevos = [] }) => {
    const todos = [...nuevos, ...testimonios];
    const [visibles, setVisibles] = useState(3);

    const verMas = () => setVisibles((prev) => prev + 3);

    return (
    <section className="lista-comentarios-seccion">
        <div className="grid-container">

        {/* Divisor */}
        <div className="lista-comentarios__divisor" aria-hidden="true">
            <span className="lista-comentarios__linea" />
            <span className="lista-comentarios__icono-divisor">✦</span>
            <span className="lista-comentarios__linea" />
        </div>

        <h2 className="lista-comentarios__titulo">Lo que dicen nuestros clientes</h2>

        {/* Tarjetas */}
        <div className="grid-x grid-padding-x">
        {todos.slice(0, visibles).map((item, i) => (
            <div key={i} className="cell small-12 medium-6 large-4">
                <div className="lista-comentarios__tarjeta">
                {/* Avatar */}
                <div className="lista-comentarios__avatar">
                    {(item.autor || item.nombre || "?")[0].toUpperCase()}
                </div>
                <div className="lista-comentarios__info">
                    <span className="lista-comentarios__nombre">
                    {item.autor || item.nombre}
                    </span>
                    <Estrellas calificacion={item.calificacion || item.estrellas} />
                </div>
                <p className="lista-comentarios__comentario">"{item.comentario}"</p>
                </div>
            </div>
        ))}
        </div>

        {/* Botón ver más */}
        {visibles < todos.length && (
            <div className="lista-comentarios__ver-mas">
            <button className="button hollow" onClick={verMas}>
                Ver más comentarios
            </button>
            </div>
        )}

        </div>
    </section>
);
};

export default ListaComentarios;