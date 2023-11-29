import MoldPage from "../mold_page"
import "./style.css"

export default function MenuPage(){
    return(
        <MoldPage>
           
                <div className="secao-estilo">
                    <div className="limit-section limita-secao-estilo">
                        <div className="cardapio-cont">
                            <img src=".\images\freddy.png"></img>
                            <p>Cardápio</p>
                        </div>

                        <div className="cardapio-secao">
                        <h2>Pizzas</h2>
                        <div className="cardapio-boxes">
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Pizza Pequena</h3>
                                    
                                </div>
                                <div>
                                    <p className="preco">R$59.90</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Pizza Média</h3>
                                </div>
                                <div>
                                    <p className="preco">R$79.90</p>
                                </div>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Pizza Grande</h3>
                                </div>
                                <div>
                                    <p className="preco">R$89.90</p>
                                </div>
                            </div>
                          
                          
                            
                            
                        </div>
                    </div>
                        
                    <div className="cardapio-secao">
                        <h2>Pizzas Salgadas</h2>
                        <div className="cardapio-boxes">
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>MUSSARELA</h3>
                                    <p>(Com molho de tomate temperado)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>CALABRESA</h3>
                                    <p>(Calabresa, cebola e azeitonas verdes)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>PORTUGUESA</h3>
                                    <p>(Presunto, ovo, cebola e azeitonas verdes)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>TOCASNA</h3>
                                    <p>(Mussarela, linguiça calabresa e azeitonas verdes)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>CHAMPIGNON</h3>
                                    <p>(Champignon, coberto com mussarela e azeitonas verdes)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>FRANGO</h3>
                                    <p>(Frango desfiado com catupiry a azeitonas verdes)</p>
                                </div>
                               
                            </div>
                            
                            
                        </div>
                    </div>

                    <div className="cardapio-secao">
                        <h2>Pizzas Doces</h2>
                        <div className="cardapio-boxes">
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Abacaxi com Canela</h3>
                                    <p>(Muçarela, abacaxi e canela)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Amendoim</h3>
                                    <p>(Chocolate branco ou preto, amendoim torrado com doce de leite)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Amore</h3>
                                    <p>(Morango e chocolate preto ou branco, opção muçarela)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Banana</h3>
                                    <p>(Muçarela, banana fatiada, canela com açúcar, opção clara de neve.)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Bombom</h3>
                                    <p>(Bombom sonho de valsa ou ouro branco)</p>
                                </div>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Chocolate Preto ou Branco</h3>
                                    <p>(Chocolate preco ou branco, opção muçarela)</p>
                                </div>
                                
                            </div>
                            
                            
                        </div>
                    </div>


                    <div className="cardapio-secao">
                        <h2>Refrigerantes</h2>
                        <div className="cardapio-boxes">
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Guarana Antarctica lata 350ml</h3>
                                </div>
                                <p className="preco">R$ 6,00</p>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Coca-cola lata 350ml</h3>
                                </div>
                                <p className="preco">R$ 5,00</p>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Coca-cola zero lata 350ml</h3>
                                </div>
                                <p className="preco">R$ 5,00</p>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Sprite lata 350ml</h3>
                                </div>
                                <p className="preco">R$ 5,00</p>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Scheweppes Tonica lata 350ml</h3>
                                </div>
                                <p className="preco">R$ 5,00</p>
                                
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>Fanta lata 350ml</h3>
                                    <p>(guarana, uva, laranja)</p>
                                </div>
                                <p className="preco">R$ 5,00</p>
                            </div>
                            
                        </div>
                    </div>
                    </div>
                </div>
          
        </MoldPage>
    );
}