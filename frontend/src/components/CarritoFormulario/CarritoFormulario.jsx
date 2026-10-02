import "./CarritoFormulario.css"
import {FaUser,FaMapMarkerAlt,FaClock,FaHome,FaStickyNote} from 'react-icons/fa'
import { useCarrito } from '../../context/CarritoContext'
import { useState } from 'react'
import ResumenPedido from '../ResumenPedido/ResumenPedido'

const CarritoFormulario = () => {

    const { calcularTotal, limpiarCarrito, productos } = useCarrito()

    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        hora: '',
        barrio: '',
        indicaciones: ''
    })

    const [mostrarModal, setMostrarModal] = useState(false)
    const [errores, setErrores] = useState({})

    const handleChange = (e) => {
        let valor = e.target.value
        valor = valor.replace(/\s+/g, ' ')
        setFormData({
            ...formData,
            [e.target.name]: valor
        })
    }

    const validar = () => {

        const nuevosErrores = {}

        const nombreRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{3,50}$/
        if (!formData.nombre.trim()) {
            nuevosErrores.nombre = 'El nombre es requerido'
        } else if (!nombreRegex.test(formData.nombre.trim())) {
            nuevosErrores.nombre =
                'Ingrese un nombre válido (solo letras y mínimo 3 caracteres)'
        }

        const direccionRegex =/^(calle|cl|carrera|cra|avenida|av|transversal|tv|diagonal|dg)\s*\d+[a-zA-Z]?\s*(sur|norte|este|oeste)?\s*#\s*\d+[a-zA-Z]?\s*-\s*\d+[a-zA-Z]?$/i
        if (!formData.direccion.trim()) {
            nuevosErrores.direccion = 'La dirección es requerida'
        } else if (!direccionRegex.test(formData.direccion.trim())) {
            nuevosErrores.direccion =
                'Ingrese una dirección válida. Ej: Carrera 36B #30-06'
        }

        if (!formData.hora.trim()) {
            nuevosErrores.hora = 'La hora es requerida'
        } else {
            const hora = formData.hora
            if (hora < '08:00' || hora > '16:00') {
                nuevosErrores.hora =
                    'La hora debe estar entre 8:00 AM y 4:00 PM'
            }
        }

        const barrioRegex =/^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s\-]{3,40}$/
        if (!formData.barrio.trim()) {
            nuevosErrores.barrio = 'El barrio es requerido'
        } else if (!barrioRegex.test(formData.barrio.trim())) {
            nuevosErrores.barrio =
                'Ingrese un barrio válido'
        }

        if (formData.indicaciones.length > 120) {
            nuevosErrores.indicaciones =
                'Máximo 120 caracteres'
        }

        return nuevosErrores
    
    }

    const handleFinalizar = () => {
        if (productos.length === 0) {
            alert(
                'Tu carrito está vacío — agrega productos desde el menú'
            )
            return
        }

        const nuevosErrores = validar()
        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores)
            return
        }

        setErrores({})
        setMostrarModal(true)
    }

    const handleConfirmar = () => {
        setMostrarModal(false)
        alert(
            '¡Pedido confirmado! Pago Contra Entrega.'
        )
        limpiarCarrito()
        setFormData({
            nombre: '',
            direccion: '',
            hora: '',
            barrio: '',
            indicaciones: ''
        })
    }

    return (

        <>
            <div className="carrito-formulario">
                {/* TITULO */}
                <h3 className="carrito-formulario__titulo">
                    Información de Domicilio...
                </h3>
                <div className="carrito-formulario__separador"></div>
                <div className="carrito-formulario__contenedor">

                    {/* FORMULARIO */}
                    <div className="carrito-formulario__card">
                        <div className="grid-x grid-padding-x">
                            {/* NOMBRE */}
                            <div className="cell small-12">
                                <label className="carrito-formulario__label">
                                    Tu Nombre...
                                </label>
                                <div className="carrito-formulario__campo">
                                    <FaUser className="carrito-formulario__icono" />
                                    <input
                                        type="text"
                                        placeholder="Indique su Nombre..."
                                        className="carrito-formulario__input"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        maxLength={50}
                                    />
                                </div>
                                {errores.nombre && (
                                    <p className="carrito-error">
                                        {errores.nombre}
                                    </p>
                                )}
                            </div>

                            {/* DIRECCION */}
                            <div className="cell small-12 medium-6">
                                <label className="carrito-formulario__label">
                                    Tu Dirección...
                                </label>
                                <div className="carrito-formulario__campo">
                                    <FaMapMarkerAlt className="carrito-formulario__icono" />
                                    <input
                                        type="text"
                                        placeholder="Ej: Calle 8 # 12-34"
                                        className="carrito-formulario__input"
                                        name="direccion"
                                        value={formData.direccion}
                                        onChange={handleChange}
                                        maxLength={60}
                                    />
                                </div>
                                {errores.direccion && (
                                    <p className="carrito-error">
                                        {errores.direccion}
                                    </p>
                                )}
                            </div>

                            {/* HORA */}
                            <div className="cell small-12 medium-6">
                                <label className="carrito-formulario__label">
                                    Hora de entrega...
                                </label>
                                <div className="carrito-formulario__campo">
                                    <FaClock className="carrito-formulario__icono" />
                                    <input
                                        type="time"
                                        className="carrito-formulario__input"
                                        name="hora"
                                        value={formData.hora}
                                        onChange={handleChange}
                                        min="08:00"
                                        max="16:00"
                                    />
                                </div>
                                {errores.hora && (
                                    <p className="carrito-error">
                                        {errores.hora}
                                    </p>
                                )}
                            </div>

                            {/* BARRIO */}
                            <div className="cell small-12 medium-6">
                                <label className="carrito-formulario__label">
                                    Barrio o conjunto...
                                </label>
                                <div className="carrito-formulario__campo">
                                    <FaHome className="carrito-formulario__icono" />
                                    <input
                                        type="text"
                                        placeholder="Barrio o conjunto..."
                                        className="carrito-formulario__input"
                                        name="barrio"
                                        value={formData.barrio}
                                        onChange={handleChange}
                                        maxLength={40}
                                    />
                                </div>
                                {errores.barrio && (
                                    <p className="carrito-error">
                                        {errores.barrio}
                                    </p>
                                )}
                            </div>

                            {/* INDICACIONES */}
                            <div className="cell small-12 medium-6">
                                <label className="carrito-formulario__label">
                                    Indicaciones especiales...
                                </label>
                                <div className="carrito-formulario__campo">
                                    <FaStickyNote className="carrito-formulario__icono" />
                                    <input
                                        type="text"
                                        placeholder="Casa azul, portón negro..."
                                        className="carrito-formulario__input"
                                        name="indicaciones"
                                        value={formData.indicaciones}
                                        onChange={handleChange}
                                        maxLength={120}
                                    />
                                </div>
                                <p className="carrito-formulario__contador">
                                    {formData.indicaciones.length}/120
                                </p>
                                {errores.indicaciones && (
                                    <p className="carrito-error">
                                        {errores.indicaciones}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* TOTAL */}
                    <div className="carrito-formulario__total">
                        <div className="carrito-formulario__total-linea"></div>
                        <p className="carrito-formulario__total-texto">
                            TOTAL ESTIMADO:
                            ${calcularTotal().toLocaleString('es-CO')}
                        </p>
                        <div className="carrito-formulario__total-linea"></div>
                    </div>

                    {/* BOTONES */}
                    <div className="carrito-formulario__botones">
                        <button
                            className="carrito-formulario__btn-limpiar"
                            onClick={limpiarCarrito}
                        >
                            LIMPIAR
                        </button>
                        <button
                            className="carrito-formulario__btn-finalizar"
                            onClick={handleFinalizar}
                        >FINALIZAR COMPRA
                        </button>
                    </div>
                </div>
            </div>

            {/* MODAL */}
            {mostrarModal && (
                <ResumenPedido
                    formData={formData}
                    onEditar={() => setMostrarModal(false)}
                    onConfirmar={handleConfirmar}
                />
            )}
        </>
    )
}

export default CarritoFormulario