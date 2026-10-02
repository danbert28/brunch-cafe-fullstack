import "./UbicacionNosotros.css"
import localImg from "../../assets/local.png"
import { FaMapMarkerAlt, FaClock } from 'react-icons/fa'

const UbicacionNosotros = () => {
    return (
        <section className="ubicacion-seccion">

            {/* Separador decorativo */}
            <div className="ubicacion-separador">
                <span className="ubicacion-separador__linea"></span>
                <span className="ubicacion-separador__texto">Ubicación</span>
                <span className="ubicacion-separador__linea"></span>
            </div>

            <div className="grid-container">
                <div className="grid-x grid-padding-x align-middle">

                    {/* Foto del local - izquierda */}
                    <div className="cell small-12 medium-6">
                        <img
                            src={localImg}
                            alt="Nuestro local"
                            className="ubicacion-foto"
                        />
                    </div>

                    {/* Card de ubicación - derecha */}
                    <div className="cell small-12 medium-6">
                        <div className="ubicacion-card">
                            <h3 className="ubicacion-titulo">Nuestra Ubicación...</h3>

                            <div className="ubicacion-item">
                                <FaMapMarkerAlt className="ubicacion-icono" />
                                <span>Carrera 36b #30-06, Neiva, Huila</span>
                            </div>

                            <div className="ubicacion-item">
                                <FaClock className="ubicacion-icono" />
                                <div>
                                    <p>Lunes a Viernes: 8 am - 12 pm</p>
                                    <p className = "horario">Sábados y Domingos: 8 am - 11 am</p>
                                </div>
                            </div>

                            <a  href="https://maps.google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ubicacion-btn button">
                                    Como Llegar
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default UbicacionNosotros