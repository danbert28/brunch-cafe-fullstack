import { useState } from "react";
import "./Comentarios.css";
import HeroComentarios from "../../components/HeroComentarios/HeroComentarios";
import FormularioComentarios from "../../components/FormularioComentarios/FormularioComentarios";
import ListaComentarios from "../../components/ListaComentarios/ListaComentarios";  
import useAnimacionEntrada from "../../hooks/useAnimacionEntrada"

const Comentarios = () => {
    const [nuevos, setNuevos] = useState([]);
    const heroRef = useAnimacionEntrada()
    const formularioRef = useAnimacionEntrada()
    const listaRef = useAnimacionEntrada()

    const agregarComentario = (nuevo) => {
    setNuevos([nuevo, ...nuevos]);
    };
    return (
        <main className="pagina-comentarios">
        {/* Manchas decorativas */}
        <div className="mancha-comentarios mancha-comentarios-1" aria-hidden="true" />
        <div className="mancha-comentarios mancha-comentarios-2" aria-hidden="true" />
        <div className="mancha-comentarios mancha-comentarios-3" aria-hidden="true" />

        <section ref={heroRef} className="animar comentarios-hero">
          <HeroComentarios />
        </section>
        <section ref={formularioRef} className="animar comentarios-formulario">
          <FormularioComentarios onPublicar={agregarComentario} />
        </section>
        <section ref={listaRef} className="animar comentarios-lista">
          <ListaComentarios nuevos={nuevos} />
        </section>
        </main>
    );
};

export default Comentarios;