import Button from './Button'



const Propiedades = (props) => {
  return (
    <>
    <ul>
     <li>{props.cadena}</li>
     <li>{props.numero}</li>
     <li>{props.buleano}</li>
     <li>{props.arreglo}</li>
     <li>{props.objeto.Apellido}</li>
     <li>{props.funcion()}</li>
     <li>{props.elementoJSX}</li>
     <li>{<Button/>}</li>
    </ul>
    </>
  )
}

export default Propiedades