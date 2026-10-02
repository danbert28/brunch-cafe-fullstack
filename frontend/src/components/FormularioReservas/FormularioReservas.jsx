import "./FormularioReservas.css"
import ResumenReserva from '../ResumenReserva/ResumenReserva'
import { personas } from '../../data/personas'
import { horas } from '../../data/horas'
import useSelectPersonas from '../../hooks/useSelectPersonas'
import { useState, useEffect } from 'react'
import { FaUser, FaUsers, FaCalendarAlt, FaClock, FaCommentAlt, FaEnvelope } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const FormularioReservas = () => {

    const [persona, SelectPersonas] = useSelectPersonas(
        'Seleccione la cantidad de personas:',
        personas,
        false
    )

    const [hora, SelectHoras] = useSelectPersonas(
        'Ingrese la hora:',
        horas,
        false
    )

    const hoy = new Date().toISOString().split('T')[0]

    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        personas: '',
        fecha: '',
        hora: '',
        observaciones: ''
    })

    const [errores, setErrores] = useState({})
    const [mostrarModal, setMostrarModal] = useState(false)

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            personas: persona
        }))
    }, [persona])

    useEffect(() => {
        setFormData(prev => ({
            ...prev,
            hora: hora
        }))
    }, [hora])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    // VALIDACIONES

    const validar = () => {

        const nuevosErrores = {}

        // Nombre

        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es requerido'
        } else if (formData.nombre.trim().length < 3) {
            nuevosErrores.nombre = 'El nombre debe tener al menos 3 caracteres'
        } else if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(formData.nombre)) {
            nuevosErrores.nombre = 'El nombre solo puede contener letras'
        }

        // Correo

        if (!formData.correo.trim()) {
            nuevosErrores.correo = 'El correo es requerido'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
            nuevosErrores.correo = 'Ingresa un correo válido'
        }

        // Personas

        if (!formData.personas) {
            nuevosErrores.personas = 'Selecciona la cantidad de personas'
        }

        // Fecha

        if (!formData.fecha) {
            nuevosErrores.fecha = 'La fecha es requerida'
        }

        // Hora

        if (!formData.hora) {
            nuevosErrores.hora = 'Selecciona una hora'
        }

        // Observaciones

        if (formData.observaciones.length > 200) {
            nuevosErrores.observaciones =
                'Las observaciones no pueden superar 200 caracteres'
        }

        return nuevosErrores
    }

    const handleSubmit = (e) => {

        e.preventDefault()

        const nuevosErrores = validar()

        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores)
            return
        }

        setErrores({})
        setMostrarModal(true)
    }

    const handleConfirmar = () => {

        emailjs.send(
            'service_mn2rux3',
            'template_r4mj66a',
            {
                nombre: formData.nombre,
                correo: formData.correo,
                fecha: formData.fecha,
                hora: formData.hora,
                personas: formData.personas,
                observaciones: formData.observaciones || 'Ninguna'
            },
            'zhwv2cSLgGN51vwua'
        )

        .then(() => {

            setMostrarModal(false)

            alert(
                '¡Reserva confirmada! Te enviamos un correo con los detalles.'
            )

            setFormData({
                nombre: '',
                correo: '',
                personas: '',
                fecha: '',
                hora: '',
                observaciones: ''
            })

        })

        .catch(() => {

            alert(
                'Hubo un error al enviar el correo. Intenta de nuevo.'
            )

        })
    }

    return (

        <>

            <section className="formulario-seccion">

                <div className="grid-container">

                    <div className="grid-x grid-padding-x">

                        <div className="cell small-12 medium-8 large-6">

                            <div className="formulario-card">

                                <h2 className="formulario-titulo">
                                    BIENVENIDOS A BRUNCH CAFE...
                                </h2>

                                <form onSubmit={handleSubmit}>

                                    {/* Nombre */}

                                    <label htmlFor="nombre">
                                        Ingrese el nombre:
                                    </label>

                                    <div className="formulario-campo-icono">

                                        <FaUser className="formulario-icono" />

                                        <input
                                            type="text"
                                            id="nombre"
                                            name="nombre"
                                            value={formData.nombre}
                                            onChange={handleChange}
                                            placeholder="Ingrese su nombre"
                                            className="formulario-input"
                                        />

                                    </div>

                                    {errores.nombre && (
                                        <p className="formulario-error">
                                            {errores.nombre}
                                        </p>
                                    )}

                                    {/* Correo */}

                                    <label htmlFor="correo">
                                        Ingrese su correo electrónico:
                                    </label>

                                    <div className="formulario-campo-icono">

                                        <FaEnvelope className="formulario-icono" />

                                        <input
                                            type="email"
                                            id="correo"
                                            name="correo"
                                            value={formData.correo}
                                            onChange={handleChange}
                                            placeholder="ejemplo@correo.com"
                                            className="formulario-input"
                                        />

                                    </div>

                                    {errores.correo && (
                                        <p className="formulario-error">
                                            {errores.correo}
                                        </p>
                                    )}

                                    {/* Personas */}

                                    <label>
                                        Seleccione la cantidad de personas:
                                    </label>

                                    <div className="formulario-campo-icono">

                                        <FaUsers className="formulario-icono" />

                                        <SelectPersonas />

                                    </div>

                                    {errores.personas && (
                                        <p className="formulario-error">
                                            {errores.personas}
                                        </p>
                                    )}

                                    {/* Fecha */}

                                    <label htmlFor="fecha">
                                        Ingrese la fecha que desee:
                                    </label>

                                    <div className="formulario-campo-icono">

                                        <FaCalendarAlt className="formulario-icono" />

                                        <input
                                            type="date"
                                            id="fecha"
                                            name="fecha"
                                            value={formData.fecha}
                                            onChange={handleChange}
                                            min={hoy}
                                            onKeyDown={(e) => e.preventDefault()}
                                            className="formulario-input"
                                        />

                                    </div>

                                    {errores.fecha && (
                                        <p className="formulario-error">
                                            {errores.fecha}
                                        </p>
                                    )}

                                    {/* Hora */}

                                    <label>
                                        Ingrese la hora:
                                    </label>

                                    <div className="formulario-campo-icono">

                                        <FaClock className="formulario-icono" />

                                        <SelectHoras />

                                    </div>

                                    {errores.hora && (
                                        <p className="formulario-error">
                                            {errores.hora}
                                        </p>
                                    )}

                                    {/* Observaciones */}

                                    <label htmlFor="observaciones">
                                        Observaciones adicionales:
                                    </label>

                                    <div className="formulario-campo-icono formulario-campo-icono--textarea">

                                        <FaCommentAlt className="formulario-icono formulario-icono--top" />

                                        <textarea
                                            id="observaciones"
                                            name="observaciones"
                                            value={formData.observaciones}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Alguna solicitud especial, alergias, etc."
                                            className="formulario-input"
                                        />

                                    </div>

                                    {errores.observaciones && (
                                        <p className="formulario-error">
                                            {errores.observaciones}
                                        </p>
                                    )}

                                    {/* Botones */}

                                    <div className="formulario-botones">

                                        <button
                                            type="button"
                                            className="button secondary hollow"
                                            onClick={() =>
                                                setFormData({
                                                    nombre: '',
                                                    correo: '',
                                                    personas: '',
                                                    fecha: '',
                                                    hora: '',
                                                    observaciones: ''
                                                })
                                            }
                                        >
                                            Limpiar Reserva
                                        </button>

                                        <button
                                            type="submit"
                                            className="button"
                                        >
                                            Enviar Reserva
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {mostrarModal && (

                <ResumenReserva
                    formData={formData}
                    onEditar={() => setMostrarModal(false)}
                    onConfirmar={handleConfirmar}
                />

            )}

        </>
    )
}

export default FormularioReservas