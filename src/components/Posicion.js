import { useState } from "react"

const initialState = "Decúbito supino" //Estado inicial
const Posicion = () => {
    const [posicion, setPosicion] = useState(initialState)

const imagenesPosiciones = {
    "Decúbito supino": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/Decubito_supino_480x480.png?v=1701260135",
    "Decúbito Lateral (izquierdo-Derecho)": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/decubito_lateral_480x480.png?v=1701260179",
    "Decúbito Prono": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/Decubito_prono_480x480.png?v=1701260212",
    "Semiprono o de Sims": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/Posicion_Sims_o_Semiprona_480x480.png?v=1701260242",
    "Posición de Fowelr": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/posicion_Fowler_480x480.png?v=1701270481",
}

  return (
    <>
    <div>
        <h1>Cambios Posturales</h1>
        <h3>Posición Actual: {posicion}</h3>
        <img src={imagenesPosiciones[posicion]} alt={posicion}/>
        <div>
            <button onClick={() => setPosicion("Decúbito Lateral (izquierdo-Derecho)")}>Decúbito Lateral </button>
            <button onClick={() => setPosicion("Decúbito Prono")}>Decúbito Prono</button>
            <button onClick={() => setPosicion("Semiprono o de Sims")}>Semiprono o de Sims</button>
            <button onClick={() => setPosicion("Posición de Fowelr")}>Posición de Fowelr</button>
            <button onClick={() => setPosicion((initialState))}>volver a Posición Incial</button>
            </div>
    </div>
    
    <style jsx>{`
         div {
            text-align: center;
         }
         img {
            width: 400px;
            height: 200px;
         }
         
         button {
            margin: 10px;
            padding: 10px 20px;
            background-color: lightblue;
            border: none;
            border-radius: 5px;
            cursor: pointer;
          }
          button:hover {
            background-color: deepskyblue;
          }
    `}</style>
    </>
  )
}

export default Posicion
