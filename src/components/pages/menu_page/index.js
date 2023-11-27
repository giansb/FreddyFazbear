import MoldPage from "../mold_page"
import "./style.css"

export default function MenuPage(){
    return(
        <MoldPage>
           
                <div className="secao-estilo">
                    <div className="limit-section limita-secao-estilo">
                    <div className="cardapio-secao">
                        <h2>Pizzas</h2>
                        <div className="cardapio-boxes">
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>MUSSARELA</h3>
                                    <p>(Com molho de tomate temperado)</p>
                                </div>
                                <div>
                                    <p className="preco">M: R$ 72,00</p>
                                    <p className="preco">G: R$ 84,00</p>
                                </div>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>CALABRESA</h3>
                                    <p>(Calabresa, cebola e azeitonas verdes)</p>
                                </div>
                                <div>
                                    <p className="preco">M: R$ 78,00</p>
                                    <p className="preco">G: R$ 90,00</p>
                                </div>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>PORTUGUESA</h3>
                                    <p>(Presunto, ovo, cebola e azeitonas verdes)</p>
                                </div>
                                <div>
                                    <p className="preco">M: R$ 78,00</p>
                                    <p className="preco">G: R$ 90,00</p>
                                </div>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>TOCASNA</h3>
                                    <p>(Mussarela, linguiça calabresa e azeitonas verdes)</p>
                                </div>
                                <div>
                                    <p className="preco">M: R$ 82,00</p>
                                    <p className="preco">G: R$ 96,00</p>
                                </div>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>CHAMPIGNON</h3>
                                    <p>(Champignon, coberto com mussarela e azeitonas verdes)</p>
                                </div>
                                <div>
                                    <p className="preco">M: R$ 88,00</p>
                                    <p className="preco">G: R$ 104,00</p>
                                </div>
                            </div>
                            <div className="cardapio-box">
                                <div className="cardapio-box-cont">
                                    <h3>FRANGO</h3>
                                    <p>(Frango desfiado com catupiry a azeitonas verdes)</p>
                                </div>
                                <div>
                                    <p className="preco">M: R$ 78,00</p>
                                    <p className="preco">G: R$ 90,00</p>
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