import "./style.css"

export default function CardCliente(props){
    return(
        <div className="card-cliente">
            <div className="card-client">
                <div className="card-cliente-img"></div>
                <p className="nome">{props.nome}</p>
            </div>
            <div>
                <p className="relato">"{props.relato}"</p>
            </div>
        </div>
    );
}