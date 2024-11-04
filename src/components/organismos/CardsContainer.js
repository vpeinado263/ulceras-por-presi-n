import Button from "../atomos/Button";
import Card from "../moleculas/Card";


const productos = [
    {
        id: 1,
        img: "https://http2.mlstatic.com/D_NQ_NP_716492-MLA52853049595_122022-O.webp",
        title:  "Colchones de aire o espuma",
        text: "Para reducir la presión en las áreas vulnerables.",
        bgcolor: "green",
    },
    {
        id: 2,
        img: "https://botiquinsans.com/wp-content/uploads/2023/03/Aposito_hidrocoloide_comfeel_plus_20_cm_x_20_cm_10-300x300.jpg",
        title:  "Apósitos para heridas",
        text: "Apósito hidrocoloide: Mantiene un ambiente húmedo para la cicatrización.",
        bgcolor: "yellow",
        ccolor: "black",
    },
    {
        id: 3,
        img: "https://techdent.cl/wp-content/uploads/2021/06/Suero-braun-250ml.jpg",
        title:  "Soluciones limpiadoras:",
        text: "Suero fisiológico (solución salina estéril): Para limpiar la herida.",
        bgcolor: "red",
    },
      {
        id: 4,
        img: "https://prevencionulcerasyheridas.com/wp-content/uploads/2021/10/Almohadilla-sacro.jpg",
        title:  "Materiales de fijación y sujeción:",
        text: "Gasas estériles: Para cubrir heridas y aplicar apósitos.",
        bgcolor: "blue",
      }
  ];

const CardContainer = () => {
    return (
    <>
        <div>
            {
             productos.map(producto => <Card key={producto.id} producto={producto}/>)
         
            }
        </div>
        
        <style jsx>{`
        div {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
          
        }
        `}</style>
    </>
    )
}
export default CardContainer