const Button = ({bgcolor}) => {
    return(
        <>
        <button>Adquirir</button>
        <style jsx>{`
            button {
                color: white;
                background-color: ${bgcolor};
                border: none;
                border-radius: .5rem;
                box-shadow: 1px 2px 2px black;
                padding: 10px 20px;
                font-weight: bold;
                transition: 0.3s;
                margin: auto;
            }       
            button:hover {
                transform: translateY(2px);
                box-shadow: none;
                background-color: rgb(41, 104, 200);
            }
        `}</style>
        </>
    )
}
export default Button