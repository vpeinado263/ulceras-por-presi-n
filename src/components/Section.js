import CardContainer from "./CardsContainer"

const Section = () => {
    return (
        <>
        <section>
            <h2>Lista de Productos más comunes necesarios para el cuidado de una UPP:</h2>
            <CardContainer/>
        </section>

        <style jsx>{`
        section {
            text-align: center;
        }
        `}</style>
        </>
    )
}
export default Section