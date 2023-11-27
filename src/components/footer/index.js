import React from "react";
import './style.css'

export default function Rodape(){
    return(
        <footer>
            <img className="logo-rodape" src="..\images\logo.png"></img>
            <div className="rodape-boxes">
                <div className="box-rodape">
                    <div className="box-rodape-cont">
                        <img className="icon" src="../images\icon\local.png"></img>
                        <p>1120 US-1, Edison, NJ 08817, Estados Unidos</p>
                    </div>
                    <div className="box-rodape-cont">
                        <img className="icon" src="../images\icon\telefone.png"></img>
                        <p>+17326030929</p>
                    </div>
                </div>
                <div className="box-rodape">
                    <div className="box-rodape-cont">
                        <img className="icon" src="../images\icon\ig.png"></img>
                        <p>/FreddyFazbearPizzaria</p>
                    </div>
                    <div className="box-rodape-cont">
                        <img className="icon" src="../images\icon\fb.png"></img>
                        <p>/FreddyFazbearPizzaria</p>
                    </div>
                </div>
            </div>
            <div className="barra"></div>
            <p>@Fazbear Entertainment</p>
        </footer>
    );
}