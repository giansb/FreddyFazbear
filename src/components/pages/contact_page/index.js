import MoldPage from "../mold_page";
import "./style.css"
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import React, { useState } from 'react';
import {validadeEmail, validadeNumero} from '../../../utils/regex'

export default function ContactPage(){

 

    const [email, setEmail] = useState("");
    const [numero, setNumero] = useState("");

    const [emailErr, setEmailErr] = useState(false);
    const [numeroErr, setNumerErr] = useState(false);


    const validate = () => {
        if(!validadeEmail.test(email)){

            setEmailErr(true)
            console.log("email inválido")
        } else {
            setEmailErr(false)
            
            console.log("email válido")
        }

        if(!validadeNumero.test(numero)){
            setNumerErr(true)
            console.log("numero inválido")
            
        } else {
            setNumerErr(false)
            console.log("numero válido")
        }
    }


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 680 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 680, min: 0 },
          items: 1
        }
      };
    return(
        <MoldPage>
            
            <div className="secao-estilo">
                <div className="limita-secao-estilo">
                <div className="sobre-cont">
                    <h2>Nos encontre!</h2>
                    <p>Encotre a filial da Freddy's mais perto de você:</p>
                </div>
                <div className="carrousel-container">
                    <Carousel responsive={responsive}>
                    
                    <div className="image1">
                        <p className="img-c-d">160 Broadway, New York, Estados Unidos</p>
                    </div>
                    <div className="image2">
                        <p className="img-c-d">1625 Wilshire Blvd, Los Angeles, Estados Unidos.</p>
                    </div>
                    <div className="image3">
                        <p className="img-c-d">2810 S Figueroa St, Los Angeles, Estados Unidos.</p>
                    </div>
                    </Carousel>
                </div>
                </div>
            </div>

            <div className="secao-estilo">
                <div className="limita-secao-estilo">
                <div className="sobre-cont"  >
                    <h2>Entre em contato conosco!</h2>

                    <div className="contato-cont">
                        <form className="foxy-form" >
                            <div>
                                <div className="foxy-form-camp">
                                    <label for="nome">Nome: </label>
                                    <input type="text" name="nome" id="nome"></input>
                                </div>

                                <div className="foxy-form-camp">
                                    <label for="cel">celular: </label>
                                    <input type="text" name="cel" id="telefone"placeholder="(XX) X XXXX-XXXX" value={numero} onChange={e => setNumero(e.target.value)}></input>
                                    
                                </div>
                                {numeroErr && <span className="al">Por favor, digite um numero válido</span>}

                                <div className="foxy-form-camp">
                                    <label for="nome">E-mail: </label>
                                    <input className="input-sugestao" type="text" name="nome" placeholder="" value={email} onChange={e => setEmail(e.target.value)}></input>
                                    
                                    
                                </div>
                                {emailErr && <span className="al">Por favor, digite um email válido</span>}

                                <div className="foxy-form-camp">
                                    <label for="nome">Sugestão: </label>
                                    <input type="text" id="sugestao"></input>
                                    
                                </div>
                            </div>

                            <button className="foxy-form-button" type="button" onClick={validate}>Enviar</button>
                        </form>
                        
                        
                        <div className="foxy-cont">
                            <img className="foxy" src="./images\Rfg.webp"/>
                            <p>Nos ajude a melhorar nosso atendimento.</p>
                        </div>
                    </div>
                    </div>

                </div>
            </div>

            
           
        </MoldPage>
    );
}