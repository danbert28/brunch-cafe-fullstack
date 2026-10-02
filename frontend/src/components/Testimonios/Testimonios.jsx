import { useState, useEffect, useCallback, useMemo } from "react";

import testimonios from "../../data/testimonios.json";
import useAnimacionEntrada from "../../hooks/useAnimacionEntrada";

import "./Testimonios.css";

/* ════════════════════════════════
   Configuración
════════════════════════════════ */

const TRANSICION_MS = 350;
const AUTOPLAY_MS = 6000;

/* ════════════════════════════════
   Estrellas
════════════════════════════════ */

const Estrellas = ({ calificacion }) => (
  <div
    className="testimonios__estrellas"
    aria-label={`${calificacion} de 5 estrellas`}
  >
    {Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        aria-hidden="true"
        className={`testimonios__estrella ${
          i < calificacion
            ? "testimonios__estrella--llena"
            : "testimonios__estrella--vacia"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

/* ════════════════════════════════
   Componente principal
════════════════════════════════ */

const Testimonios = () => {
  const ref = useAnimacionEntrada();

  const [actual, setActual] = useState(0);
  const [animando, setAnimando] = useState(false);

  const total = testimonios.length;

  /* ───────── Navegación ───────── */

  const cambiarTestimonio = useCallback(
    (indice) => {
      if (animando) return;

      setAnimando(true);

      setTimeout(() => {
        setActual(indice);

        requestAnimationFrame(() => {
          setAnimando(false);
        });
      }, TRANSICION_MS);
    },
    [animando]
  );

  const siguiente = useCallback(() => {
    cambiarTestimonio((actual + 1) % total);
  }, [actual, total, cambiarTestimonio]);

  /* ───────── Autoplay ───────── */

  useEffect(() => {
    if (animando) return;

    const intervalo = setInterval(
      siguiente,
      AUTOPLAY_MS
    );

    return () => clearInterval(intervalo);
  }, [siguiente, animando]);

  /* ───────── Testimonio actual ───────── */

  const testimonio = useMemo(
    () => testimonios[actual],
    [actual]
  );

  return (
  <section
    ref={ref}
    className="testimonios-wrap animar-subir"
  >
    <div className="testimonios">

      {/* Encabezado */}

      <div
        className="testimonios__divisor"
        aria-hidden="true"
      >
        <span className="testimonios__linea" />
        <span className="testimonios__icono-divisor">
          ✦
        </span>
        <span className="testimonios__linea" />
      </div>

      <h2 className="testimonios__titulo">
        Lo que dicen nuestros clientes
      </h2>

      {/* Comentario */}

      <div
        aria-live="polite"
        aria-atomic="true"
        className={`testimonios__cuerpo ${
          animando
            ? "testimonios__cuerpo--oculto"
            : "testimonios__cuerpo--visible"
        }`}
      >
        <blockquote className="testimonios__blockquote">

          <p className="testimonios__comentario">
            "{testimonio.comentario}"
          </p>

          <footer className="testimonios__autor">

            <cite className="testimonios__nombre">
              — {testimonio.autor}
            </cite>

            <Estrellas
              calificacion={
                testimonio.calificacion
              }
            />

          </footer>

        </blockquote>
      </div>

      {/* Navegación */}

      <div
        className="testimonios__puntos"
        role="tablist"
        aria-label="Navegación de testimonios"
      >
        {testimonios.map(({ id, autor }, i) => (
          <button
            key={id}
            role="tab"
            aria-selected={i === actual}
            aria-label={`Testimonio de ${autor}`}
            className={`testimonios__punto ${
              i === actual
                ? "testimonios__punto--activo"
                : ""
            }`}
            onClick={() =>
              cambiarTestimonio(i)
            }
          />
        ))}
      </div>
    </div>
    </section>
  );
};

export default Testimonios;