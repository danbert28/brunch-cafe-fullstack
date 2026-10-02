import "./ResumenReserva.css"
import {
    FaUser,
    FaUsers,
    FaCalendarAlt,
    FaClock,
    FaCommentAlt,
    FaCheckCircle,
    FaEnvelope
} from 'react-icons/fa'

import { useEffect } from 'react'

const ResumenReserva = ({ formData, onEditar, onConfirmar }) => {

    useEffect(() => {

        document.body.style.overflow = 'hidden'

        return () => {
            document.body.style.overflow = 'unset'
        }

    }, [])

    return (

        <div className="resumen-overlay">

            <div className="resumen-modal">

                {/* Encabezado */}

                <div className="resumen-header">

                    <FaCheckCircle className="resumen-header__icono" />

                    <h2 className="resumen-header__titulo">
                        Resumen de tu Reserva
                    </h2>

                    <p className="resumen-header__subtitulo">
                        Verifica los datos antes de confirmar
                    </p>

                </div>

                {/* Datos */}

                <div className="resumen-datos">

                    {/* Nombre */}

                    <div className="resumen-item">

                        <FaUser className="resumen-item__icono" />

                        <div>

                            <span className="resumen-item__label">
                                Nombre
                            </span>

                            <span className="resumen-item__valor">
                                {formData.nombre}
                            </span>

                        </div>

                    </div>

                    {/* Correo */}

                    <div className="resumen-item">

                        <FaEnvelope className="resumen-item__icono" />

                        <div>

                            <span className="resumen-item__label">
                                Correo
                            </span>

                            <span className="resumen-item__valor">
                                {formData.correo}
                            </span>

                        </div>

                    </div>

                    {/* Personas */}

                    <div className="resumen-item">

                        <FaUsers className="resumen-item__icono" />

                        <div>

                            <span className="resumen-item__label">
                                Personas
                            </span>

                            <span className="resumen-item__valor">
                                {formData.personas || 'No seleccionado'}
                            </span>

                        </div>

                    </div>

                    {/* Fecha */}

                    <div className="resumen-item">

                        <FaCalendarAlt className="resumen-item__icono" />

                        <div>

                            <span className="resumen-item__label">
                                Fecha
                            </span>

                            <span className="resumen-item__valor">
                                {formData.fecha}
                            </span>

                        </div>

                    </div>

                    {/* Hora */}

                    <div className="resumen-item">

                        <FaClock className="resumen-item__icono" />

                        <div>

                            <span className="resumen-item__label">
                                Hora
                            </span>

                            <span className="resumen-item__valor">
                                {formData.hora || 'No seleccionada'}
                            </span>

                        </div>

                    </div>

                    {/* Observaciones */}

                    {formData.observaciones && (

                        <div className="resumen-item">

                            <FaCommentAlt className="resumen-item__icono" />

                            <div>

                                <span className="resumen-item__label">
                                    Observaciones
                                </span>

                                <span className="resumen-item__valor">
                                    {formData.observaciones}
                                </span>

                            </div>

                        </div>

                    )}

                </div>

                {/* Botones */}

                <div className="resumen-botones">

                    <button
                        className="resumen-botones__editar"
                        onClick={onEditar}
                    >
                        Editar Reserva
                    </button>

                    <button
                        className="resumen-botones__confirmar"
                        onClick={onConfirmar}
                    >
                        Confirmar Reserva
                    </button>

                </div>

            </div>

        </div>
    )
}

export default ResumenReserva