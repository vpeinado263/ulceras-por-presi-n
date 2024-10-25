import { useState } from "react";

const ContadorCambios = () => {
  const initialState = 0;
  const [contador, setContador] = useState(initialState);

  const incrementar = () => setContador((prev) => prev + 1);
  const resetear = () => setContador(initialState);

  return (
    <div className="contador-cambios-container">
      <h3>Contador de Cambios de Posición</h3>
      <p>{contador} cambio(s) realizado(s)</p>
      <div className="botones">
        <button onClick={incrementar}>Registrar Cambio</button>
        <button onClick={resetear}>Reiniciar Contador</button>
      </div>

      <style jsx>{`
        .contador-cambios-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          border: 1px solid #ccc;
          padding: 20px;
          margin: 20px 0;
          background-color: #f9f9f9;
        }
        .botones {
          display: flex;
          gap: 10px;
          margin-top: 10px;
        }
        button {
          padding: 10px 20px;
          background-color: #0070f3;
          color: white;
          border: none;
          border-radius: 5px;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default ContadorCambios;

