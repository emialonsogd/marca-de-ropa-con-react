import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import ItemDetail from "./ItemDetail";
import './ItemDetailContainer.css'; 

function ItemDetailContainer() {
  const { itemId } = useParams(); 
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { agregarAlCarrito } = useCart(); 

  useEffect(() => {
    setLoading(true);
    setError(null);

    const productosMock = [
      { id: 1, nombre: "Playera Oversize", categoria: "playera", descripcion: "Oversize cut", precio: 200 },
      { id: 2, nombre: "Pantalón Baggy", categoria: "pantalones", descripcion: "Baggy", precio: 600 },
      { id: 3, nombre: "Sudadera Cut", categoria: "sudaderas", descripcion: "Corte medio", precio: 500 }
    ];

    //pequeña simulacion de carga
    setTimeout(() => {
      const productoEncontrado = productosMock.find((p) => p.id === parseInt(itemId));
      if (productoEncontrado) {
        setProducto(productoEncontrado);
      } else {
        setError("Producto no encontrado.");
      }
      setLoading(false);
    }, 1000);
  }, [itemId]);

  const handleAgregarAlCarrito = () => {
    if (producto) {
      agregarAlCarrito(producto);
    }
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item-detail-container">
      <ItemDetail producto={producto} />
      <button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
    </div>
  );
}

export default ItemDetailContainer;

