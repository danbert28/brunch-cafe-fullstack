/**
 * useAnimacionEntrada.js
 * Hook que detecta cuando un elemento entra en pantalla
 * y activa una clase CSS de animación.
 *
 * Uso:
 *   const ref = useAnimacionEntrada();
 *   <div ref={ref} className="animar">...</div>
 */

import { useEffect, useRef } from "react";

const useAnimacionEntrada = (opciones = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;

    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          elemento.classList.add("visible");
          observador.unobserve(elemento); // solo anima una vez
        }
      },
      {
        threshold: opciones.threshold || 0.15,
        rootMargin: opciones.rootMargin || "0px",
      }
    );

    observador.observe(elemento);
    return () => observador.disconnect();
  }, [opciones.threshold, opciones.rootMargin]);

  return ref;
};

export default useAnimacionEntrada;