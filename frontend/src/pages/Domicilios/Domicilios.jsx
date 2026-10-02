import "./Domicilios.css"
import CarritoProducto from "../../components/CarritoProducto/CarritoProducto"
import CarritoFormulario from "../../components/CarritoFormulario/CarritoFormulario"
import useAnimacionEntrada from "../../hooks/useAnimacionEntrada"

const Domicilios = () => {
    const productosRef = useAnimacionEntrada()
    const formularioRef = useAnimacionEntrada()
    return (
        <main className="carrito-pagina">
            <div className="grid-container">
                <section ref={productosRef} className="animar carrito-productos">
                  <CarritoProducto
                      imagen="https://via.placeholder.com/300x200"
                      nombre="Nombre del Producto..."
                      descripcion="Breve Descripción del producto"
                  />
                </section>
                <section ref={formularioRef} className="animar carrito-formulario">
                  <CarritoFormulario />
                </section>
            </div>
        </main>
    )
}

export default Domicilios