import { useState } from "react";
import ContadorCambios from "../moleculas/Contador";
import Posicion from "../moleculas/Posicion";



const SectionUpp = () => {
  const initialState = 0;
  const [contador, setContador] = useState(initialState);

  const incrementar = () => setContador((prev) => prev + 1);
  const resetearContador = () => setContador(initialState);

  return (
    <div>
      <Posicion incrementar={incrementar}/>
      <ContadorCambios contador={contador}
        incrementar={incrementar}
        resetearContador={resetearContador}
      />
        
    </div>
  );
};

export default SectionUpp;
