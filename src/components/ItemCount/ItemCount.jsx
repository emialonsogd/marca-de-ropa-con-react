import './ItemCount.css';

function ItemCount() {

    let contador = 5;
    function modificarContador(operacion){
        if(operacion === "+"){
            if(contador < 9){
                contador++;
            }
        }  else {
            if(contador > 1){
                contador--;
            };
        };
        document.getElementById("contador").innerText = contador;
    }

    return (
        <div style={{display: "flex", width: "10rem", padding: "2rem",justifyContent: "space-around", alignItems: "center" }}>
            <button onClick={() => modificarContador("-")}>-</button>
            <p id="contador">{contador}</p>
            <button onClick={() => modificarContador("+")}>+</button>
        </div>
    );
}

export default ItemCount;