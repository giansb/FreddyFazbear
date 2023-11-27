import Header from "../../Header";
import Rodape from "../../footer";



export default function MoldPage(props){
    return(
        <div>
            <Header/>
            {props.children}
            <Rodape/>
        </div>

        
    );
}