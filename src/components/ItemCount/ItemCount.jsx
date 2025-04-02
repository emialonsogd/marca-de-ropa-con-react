import { useState } from 'react';
import './ItemCount.css';

function ItemCount({ stock, nombreDelProducto }) {
    
    const [contador, setContador] = useState(1);
    //const {stock, nombreDelProducto} = props;
    function modificarContador(operacion){
        if(operacion === "+"){
            if(contador < stock){
                setContador(contador + 1);
            }
        }  else {
            if(contador > 1){
                setContador(contador - 1);
            };
        };
    }

    function agregarAlCarrito(){
        console.log(`Agregaras ${contador} unidades de ${nombreDelProducto}`)
        setContador(1);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", padding: "2rem" }}>
            <h3>Nombre del pruducto: {nombreDelProducto}</h3>
            <div style={{display: "flex", width: "10rem", padding: "2rem",justifyContent: "space-around", alignItems: "center" }}>
                <button onClick={() => modificarContador("-")}>-</button>
                <p id="contador">{contador}</p>
                <button onClick={() => modificarContador("+")}>+</button>
            </div>
            <button style={{width: "10rem"}}onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;