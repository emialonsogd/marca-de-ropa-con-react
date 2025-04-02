import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import './ItemListContainer.css';
import ItemList from "./ItemList";

function ItemListContainer() {
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true); // Estado de carga
    const [error, setError] = useState(null); // Estado de error
    
    useEffect(() => {
      // Simulación de llamada API con Promises
      const productosMock = [
        { id: 1, nombre: "Playera Azul", categoria: "Playeras" },
        { id: 2, nombre: "Pantalón Negro", categoria: "Pantalones" },
        { id: 3, nombre: "Sudadera Roja", categoria: "Sudaderas" }
      ];
  
      setLoading(true); // Indicamos que se está cargando
      new Promise((resolve, reject) => {
        setTimeout(() => resolve(productosMock), 1000); // Simulamos la llamada a la API
      })
        .then((data) => {
          if (categoryId) {
            setProductos(data.filter((p) => p.categoria === categoryId)); // Filtramos por categoría
          } else {
            setProductos(data); // Si no hay categoría, mostramos todos los productos
          }
          setLoading(false); // Terminó la carga
        })
        .catch((err) => {
          setError("Error al cargar los productos"); // Manejo de error
          setLoading(false);
        });
    }, [categoryId]);
  
    if (loading) return <p>Cargando productos...</p>;
    if (error) return <p>{error}</p>;
  
    return <ItemList productos={productos} />;
}

export default ItemListContainer;