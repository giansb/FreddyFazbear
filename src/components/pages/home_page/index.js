import MoldPage from "../mold_page";

import "./style.css"
import React, { useState } from 'react';
import ScriptStatus from "../../componentstate";
import CardCliente from "../../card-cliente";

import {validadeEmail, validadeNumero} from '../../../utils/regex'

export default function HomePage(){
    var nvermelho="neon-vermelho"
    var nverde="neon-verde"

    var nvermelhoT = "Fechado"
    var nverdeT = "Aberto"

 

   
    
    


    return(

        
        <MoldPage>
            
           <section className="secao-banner">
           <div className ="banner limit-section">
                <div className="banner-cont">
                    <h1>Freddy's Fazbear</h1>
                    <h2>Pizzaria</h2>
                    <div className="status">
                    <h3>status: </h3>
                    <div className={ScriptStatus()?nverde:nvermelho}><h1 className="letreiro">{ScriptStatus()? nverdeT: nvermelhoT}</h1></div>
                    </div>
                </div>
            </div>
           </section>

            <section className="secao-estilo" id="sobre">
                <div className="limita-secao-estilo">
                    <div className="box-icons">   
                        <img className="icon-box" src="./images/friends.png"></img>  
                    </div>
                    <div className="sobre-cont">
                    <h2>Bem-vindo a Freddy's Fazbear Pizzaria!</h2>
                    <p>Um lugar mágico para crianças e adultos, onde a fantasia e a diversão ganham vida! </p>
                    </div>
                </div>
            </section>
            
            <section className="secao-estilo">
                <div className="limita-secao-estilo">
                    <div className="secao-promocao">
                        <img src="./images/pizza-box.png"></img>
                        <div className="secao-promocao-cont">
                            <h2>PROMOÇÃO</h2>
                            <p>Pizza familia do Freddy's</p>
                            <p className="preco-p">R$ 79,90</p>
                            
                            <a href="#/cardapio#top">Cardápio completo</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="secao-estilo">
                <div className="limita-secao-estilo">
                    <div className="sobre-cont">
                        <h2 className="clientes-title">Nossos clientes sempre voltam:</h2>
                    </div>
                    <div className="secao-clientes">
                        <CardCliente nome="Ana Oliveira" relato="A Freddy's Fazbear foi uma descoberta incrível! Amo a variedade de sabores. O atendimento é impecável. Recomendo a todos!"/>
                        <CardCliente nome="Jeremy F." relato="Trabalhei na Freddy Fazbear por um tempo, e mesmo após horas de expediente, nunca me cansei da pizza. O segredo está na receita, com certeza."/>
                        <CardCliente nome="Isabela Silva" relato="Adorei a atmosfera única da Freddy Fazbear Pizzaria! Os animatrônicos são incrivelmente realistas, e a comida é deliciosa. Voltarei com certeza!"/>
                        <CardCliente nome="Fernanda Lima" relato="A Freddy's é o lugar perfeito para uma noite divertida. As animações dos animatrônicos são assustadoramente divertidas, e a pizza é deliciosa."/>
                        <CardCliente nome="Camila Martins" relato="A Freddy's é minha segunda casa! Amo a pizza, e os animatrônicos sempre me fazem sorrir. Melhor lugar para se divertir."/>
                        <CardCliente nome="Marina Almeida" relato="A Freddy's é um lugar mágico para quem ama os jogos. A pizza é deliciosa, e a experiência com os animatrônicos é fenomenal."/>
                    </div>
                </div>
            </section>

            
                
            
        </MoldPage>
    );


    
}