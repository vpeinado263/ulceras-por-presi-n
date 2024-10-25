import Button from "./Button"

const Card = ({producto}) => { //Recivo la propieda value
    return(
        <>
        <figure>
            <img src=""/>
            <figcaption>
                <h3></h3>
            </figcaption>
            <p></p>
            <Button/>
        </figure>
        <style jsx>{`
        figure {
            width: 200px;
            height: 500px;
            border: 2px solid rgb(52, 131, 250);
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        img {
            width: 100%;
            height: 40%;
        }
        h3 {
            font-size: 1rem;
            text-aling: center;
        }
        p{
            font-size: 1rem;
            text-aling: center;
        }
        `}</style>
        </>
    )
}
export default Card