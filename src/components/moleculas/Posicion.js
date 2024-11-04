import { useState } from "react";
import Image from "next/image";

const initialState = "Decúbito supino"; 

const Posicion = ({ incrementar }) => {
  const [posicion, setPosicion] = useState(initialState);

  const imagenesPosiciones = {
    "Decúbito supino": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/Decubito_supino_480x480.png?v=1701260135",
    "Decúbito Lateral (izquierdo-Derecho)": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/decubito_lateral_480x480.png?v=1701260179",
    "Decúbito Prono": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/Decubito_prono_480x480.png?v=1701260212",
    "Semiprono o de Sims": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/Posicion_Sims_o_Semiprona_480x480.png?v=1701260242",
    "Posición de Fowelr": "https://cdn.shopify.com/s/files/1/0757/3281/2102/files/posicion_Fowler_480x480.png?v=1701270481",
  };

  const cambiarPosicion = (nuevaPosicion) => {
    setPosicion(nuevaPosicion);
    incrementar();
  };

  return (
    <>
      <div>
        <h1>Cambios Posturales</h1>
        <h3>Posición Actual: {posicion}</h3>
        <Image 
         src={imagenesPosiciones[posicion]} 
         alt={posicion} 
         width={400}
         height={200}
         />

        <div>
          <button onClick={() => cambiarPosicion("Decúbito Lateral (izquierdo-Derecho)")}>
            Decúbito Lateral
          </button>
          <button onClick={() => cambiarPosicion("Decúbito Prono")}>Decúbito Prono</button>
          <button onClick={() => cambiarPosicion("Semiprono o de Sims")}>Semiprono o de Sims</button>
          <button onClick={() => cambiarPosicion("Posición de Fowelr")}>Posición de Fowelr</button>
          <button onClick={() => cambiarPosicion(initialState)}>Volver a Posición Inicial</button>
        </div>
      </div>

      <style jsx>{`
        div {
          text-align: center;
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
  );
};

export default Posicion;
