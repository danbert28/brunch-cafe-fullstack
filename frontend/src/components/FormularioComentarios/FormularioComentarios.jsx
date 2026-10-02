import { useState } from "react";
import "./FormularioComentarios.css";

const FormularioComentarios = ({ onPublicar }) => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [estrellas, setEstrellas] = useState(0);
  const [comentario, setComentario] = useState("");
  const [errores, setErrores] = useState({});
  const [publicado, setPublicado] = useState(false);

  const validar = () => {
    const nuevosErrores = {};
    const soloLetras = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nombre.trim()) {
      nuevosErrores.nombre = "El nombre completo es obligatorio.";
    } else if (!soloLetras.test(nombre.trim())) {
      nuevosErrores.nombre = "El nombre solo puede contener letras.";
    } else if (nombre.trim().length < 5) {
      nuevosErrores.nombre = "Ingresa tu nombre y apellido completos.";
    } else if (nombre.trim().length > 60) {
      nuevosErrores.nombre = "El nombre no puede superar 60 caracteres.";
    }

    if (correo.trim() && !correoValido.test(correo.trim())) {
      nuevosErrores.correo = "Ingresa un correo electrónico válido.";
    }

    if (estrellas === 0) {
      nuevosErrores.estrellas = "Por favor selecciona una calificación.";
    }

    if (!comentario.trim()) {
      nuevosErrores.comentario = "El comentario es obligatorio.";
    } else if (comentario.trim().length < 10) {
      nuevosErrores.comentario = "El comentario debe tener al menos 10 caracteres.";
    } else if (comentario.trim().length > 300) {
      nuevosErrores.comentario = "El comentario no puede superar 300 caracteres.";
    }

    return nuevosErrores;
  };

  const limpiar = () => {
    setNombre("");
    setCorreo("");
    setEstrellas(0);
    setComentario("");
    setErrores({});
  };

  const publicar = () => {
    const nuevosErrores = validar();
    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }
    onPublicar({ nombre, correo, estrellas, comentario });
    limpiar();
    setPublicado(true);
    setTimeout(() => setPublicado(false), 4000);
  };

  return (
    <section className="formulario-comentarios-seccion">
      <div className="grid-container">

        {/* Divisor */}
        <div className="lista-comentarios__divisor" aria-hidden="true">
          <span className="lista-comentarios__linea" />
          <span className="lista-comentarios__icono-divisor">✦</span>
          <span className="lista-comentarios__linea" />
        </div>

        <div className="grid-x grid-padding-x">
          <div className="cell small-12 medium-8 large-6">
            <div className="formulario-comentarios-card">

              <h2 className="formulario-comentarios-titulo">Escribe tu experiencia aquí</h2>

              {/* Mensaje éxito */}
              {publicado && (
                <div className="formulario-comentarios-exito">
                  ✓ ¡Tu comentario fue publicado exitosamente!
                </div>
              )}

              {/* Nombre y correo */}
              <div className="grid-x grid-padding-x">
                <div className="cell small-12 medium-6">
                  <label htmlFor="nombre">Nombre Completo</label>
                  <input
                    type="text"
                    id="nombre"
                    placeholder="Tu Nombre y Apellido"
                    value={nombre}
                    maxLength={60}
                    onChange={(e) => {
                      setNombre(e.target.value);
                      setErrores((prev) => ({ ...prev, nombre: "" }));
                    }}
                    className={"formulario-comentarios-input" + (errores.nombre ? " input-error" : "")}
                  />
                  {errores.nombre && <p className="formulario-comentarios-error">{errores.nombre}</p>}
                </div>
                <div className="cell small-12 medium-6">
                  <label htmlFor="correo">Correo electrónico</label>
                  <input
                    type="email"
                    id="correo"
                    placeholder="Tu Correo Electrónico"
                    value={correo}
                    onChange={(e) => {
                      setCorreo(e.target.value);
                      setErrores((prev) => ({ ...prev, correo: "" }));
                    }}
                    className={"formulario-comentarios-input" + (errores.correo ? " input-error" : "")}
                  />
                  {errores.correo && <p className="formulario-comentarios-error">{errores.correo}</p>}
                </div>
              </div>

              {/* Estrellas */}
              <div className="formulario-comentarios-estrellas-wrapper">
                <label>Calificación</label>
                <div className="formulario-comentarios-estrellas">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span
                      key={i}
                      className={"formulario-comentarios-estrella" + (i <= estrellas ? " activa" : "")}
                      onClick={() => {
                        setEstrellas(i);
                        setErrores((prev) => ({ ...prev, estrellas: "" }));
                      }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                {errores.estrellas && <p className="formulario-comentarios-error">{errores.estrellas}</p>}
              </div>

              {/* Comentario */}
              <label htmlFor="comentario">Tu Comentario...</label>
              <textarea
                id="comentario"
                placeholder="Tu Comentario..."
                rows="4"
                value={comentario}
                maxLength={300}
                onChange={(e) => {
                  setComentario(e.target.value);
                  setErrores((prev) => ({ ...prev, comentario: "" }));
                }}
                className={errores.comentario ? "input-error" : ""}
              />
              <div className="formulario-comentarios-contador">
                {comentario.length}/300 caracteres
              </div>
              {errores.comentario && <p className="formulario-comentarios-error">{errores.comentario}</p>}

              {/* Botón */}
              <div className="formulario-comentarios-botones">
                <button type="button" className="button" onClick={publicar}>
                  Publicar Comentario
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormularioComentarios;