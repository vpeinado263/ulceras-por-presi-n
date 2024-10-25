// src/components/PosicionContador.js
import { useState } from "react";
import ContadorCambios from "./Contador";
import Posicion from "./Posicion";

const PosicionContador = () => {
  const initialState = 0;
  const [contador, setContador] = useState(initialState);

  const incrementar = () => setContador((prev) => prev + 1);
  const resetearContador = () => setContador(initialState);

  return (
    <div>
      <Posicion incrementar={incrementar} />
      <ContadorCambios
        contador={contador}
        incrementar={incrementar}
        resetearContador={resetearContador}
      />
    </div>
  );
};

export default PosicionContador;
