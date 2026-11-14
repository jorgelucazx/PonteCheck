
    //<---CONVERSAO DE TEMPO--->
function converterHoras(){  
   
    let inicio = document.getElementById('entrada').value;
    let fim = document.getElementById('saida').value;   

     if(!fim || !inicio || fim <= inicio){
        alert("Informe o horário correto!");
        return;
    }

    let hIni = inicio.split(":");
    let hFim = fim.split(":");

    let hInicial = Number(hIni[0]) + (Number(hIni[1])/60);
    let hFinal = Number(hFim[0]) + (Number(hFim[1])/60);

    return hFinal - hInicial;

}

function analisarTr(){

    let velocidade;
    let multado;
    const tamanho = 13.29;
    let tempo = converterHoras();

    velocidade = tamanho / tempo;

    let minutos = Math.round(tempo*60);
    
    if (minutos<60){    
            document.getElementById('tempo-resultado').textContent = `${minutos} min`;
    }
    else{

        let horas = Math.floor(minutos/60);
        let resto = String(minutos%60).padStart(2, '0');
            document.getElementById('tempo-resultado').textContent = `${horas}:${resto} h`;
    }


    document.getElementById('velocidade').textContent = `${velocidade.toFixed(1)} km/h`;

    if(velocidade>80){
        document.getElementById('situacao-resultado').textContent = dsd;
    }


}