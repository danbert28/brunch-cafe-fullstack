import "./Reservas.css"
import HeroReservas from "../../components/HeroReservas/HeroReservas"
import FormularioReservas from "../../components/FormularioReservas/FormularioReservas"
import ContactoReservas from "../../components/ContactoReservas/ContactoReservas"
import FondoAnimado from "../../components/FondoAnimado/FondoAnimado"
import useAnimacionEntrada from "../../hooks/useAnimacionEntrada"

const Reservas = () => {
    const heroRef = useAnimacionEntrada()
    const formularioRef = useAnimacionEntrada()
    const contactoRef = useAnimacionEntrada()

    return (
        <main className="pagina-Reservas">
            <section ref={heroRef} className="animar reservas-hero">
              <HeroReservas />
            </section>
            <FondoAnimado>
                <section ref={formularioRef} className="animar reservas-formulario">
                  <FormularioReservas />
                </section>
                <section ref={contactoRef} className="animar reservas-contacto">
                  <ContactoReservas />
                </section>
            </FondoAnimado>
        </main>

    )
}

export default Reservas 