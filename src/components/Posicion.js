import { useState } from "react"

const Posicion = () => {
    const [posicion, setPosicion] = useState("Decubito supino")
  return (
    <>
    <h3>Posición Actual: {posicion}</h3>
    <button onClick={() => setPosicion("Decúbito Lateral Izquierdo")}>Cambiar a Lateral Izquierdo</button>
    <button onClick={() => setPosicion("Decúbito Lateral Derecho")}>Cambiar a lateral Derecho</button>
    <button onClick={() => setPosicion("Decúbito Supiono")}>Volver a supino</button>
    </>
  )
}

export default Posicion
