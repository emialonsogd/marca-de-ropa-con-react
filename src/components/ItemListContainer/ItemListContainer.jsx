import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemCard from "../ItemCard/ItemCard";

function ItemListContainer() {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const productosMock = [
      { id: 1, nombre: "Playera Oversize", categoria: "playera", precio: 200 },
      { id: 2, nombre: "Pantalón Baggy", categoria: "pantalones", precio: 600 },
      { id: 3, nombre: "Sudadera Cut", categoria: "sudaderas", precio: 500 }
    ];

    setLoading(true);

    new Promise((resolve) => {
      setTimeout(() => resolve(productosMock), 1000);
    })
      .then((data) => {
        if (categoryId) {
          setProductos(data.filter((p) => p.categoria === categoryId));
        } else {
          setProductos(data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Error al cargar los productos");
        setLoading(false);
      });
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="item-list">
      {productos.map((producto) => (
        <ItemCard key={producto.id} producto={producto} />
      ))}
    </div>
  );
}

export default ItemListContainer;
