export default function ScriptStatus () {
    var horaAtual = new Date();
    var minutosAtual = new Date();
    var dataHoje = new Date();

    var minutosAgora = minutosAtual.getMinutes();
    var horaAgora = horaAtual.getHours();
    var dia = dataHoje.getDay();

    

    var funcionamento = [
        {dia:1,horaInicio:11,horaFinal:23,minutoFinal:59},
        {dia:2,horaInicio:11,horaFinal:23,minutoFinal:59},
        {dia:3,horaInicio:9,horaFinal:23,minutoFinal:59},
        {dia:4,horaInicio:9,horaFinal:23,minutoFinal:59},
        {dia:5,horaInicio:9,horaFinal:23,minutoFinal:59},
        {dia:6,horaInicio:11,horaFinal:23,minutoFinal:59},
        {dia:0,horaInicio:11,horaFinal:23,minutoFinal:59},
    ]

    var setBotaoAtualizado = new Boolean()
    const Checar = () => {
        for(let obj of funcionamento){
            if(dia == obj.dia){
                if((horaAgora >= obj.horaInicio && minutosAgora < 59) && (horaAgora < obj.horaFinal)){
                    setBotaoAtualizado = true
                }
                else{
                    setBotaoAtualizado = false
                }
            }
        }
    }
    Checar()
    return(
        setBotaoAtualizado
    );
    
}