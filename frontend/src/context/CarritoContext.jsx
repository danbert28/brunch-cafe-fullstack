import { createContext, useState, useContext } from 'react'

const CarritoContext = createContext()

export const CarritoProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    // Agregar producto al carrito
    const agregarProducto = (producto) => {
        const existe = productos.find(p => p.id === producto.id)
        if (existe) {
            // Si ya existe, aumenta la cantidad
            setProductos(productos.map(p =>
                p.id === producto.id
                    ? { ...p, cantidad: p.cantidad + 1 }
                    : p
            ))
        } else {
            // Si no existe, lo agrega con cantidad 1
            setProductos([...productos, { ...producto, cantidad: 1 }])
        }
    }

    // Aumentar cantidad
    const aumentarCantidad = (id) => {
        setProductos(productos.map(p =>
            p.id === id ? { ...p, cantidad: p.cantidad + 1 } : p
        ))
    }

    // Disminuir cantidad
    const disminuirCantidad = (id) => {
        setProductos(productos.map(p =>
            p.id === id && p.cantidad > 1
                ? { ...p, cantidad: p.cantidad - 1 }
                : p
        ).filter(p => p.cantidad > 0))
    }

    // Eliminar producto
    const eliminarProducto = (id) => {
        setProductos(productos.filter(p => p.id !== id))
    }

    // Limpiar carrito
    const limpiarCarrito = () => {
        setProductos([])
    }

    // Calcular total
    const calcularTotal = () => {
        return productos.reduce((total, p) => {
            const precio = parseInt(p.precio.replace(/[^0-9]/g, ''))
            return total + precio * p.cantidad
        }, 0)
    }

    return (
        <CarritoContext.Provider value={{
            productos,
            agregarProducto,
            aumentarCantidad,
            disminuirCantidad,
            eliminarProducto,
            limpiarCarrito,
            calcularTotal
        }}>
            {children}
        </CarritoContext.Provider>
    )
}

// Hook para usar el contexto fácilmente
export const useCarrito = () => useContext(CarritoContext)

export default CarritoContext