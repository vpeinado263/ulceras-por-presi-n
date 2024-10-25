import { useState } from "react"
import ContadorCambios from "./Contador";
import Posicion from "./Posicion";

const SectionUpp = () => {
  const initialPosicion = "Decubito supino";
  const [posicion, setPosicion] = useState(initialPosicion);
  const initialContador = 0;
  const [contador, setContador] = useState(initialContador);

  const cambiarPosicion = (nuevaPosicion) => {
    setPosicion(nuevaPosicion);
    setContador((prev) => +1);
  };

  const resetearContador = () => {
    setPosicion(initialPosicion);
    setContador(initialContador);
  };

  return (
    <div>
      <h1>Cambios posturales del paciente</h1>
      <Posicion posicion={posicion} cambiarPosicion={cambiarPosicion}/>
      <ContadorCambios contador={contador} resetearContador={resetearContador}/>
    </div>
  )
}

export default SectionUpp
