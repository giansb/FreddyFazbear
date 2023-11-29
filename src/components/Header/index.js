import { HashLink } from "react-router-hash-link";
import "./style.css"

export default function Header(){
    return(
        <div>
            
            <header>
            
            <div>
                <div className="header-cont">
                <div className="cab-logo">
                <div>
                <div class="button" tabindex="0">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </div>
                </div>
                    <a link href="/"><img className="logo" src=".\images\logo.png"></img></a>
                </div>

                    <nav>
                        <HashLink to="/#top">Inicio</HashLink>
                        <HashLink to="/cardapio#top">Cardápio</HashLink>
                        <HashLink to="/contato" smooth>Contato</HashLink>
                    </nav>
                </div>
            </div>
        </header>
        <div className="espaco"></div>
        </div>
    );
}