const dia = document.getElementById('dia');
const hora = document.getElementById('hora');
const minuto = document.getElementById('minuto');
const segundo = document.getElementById('segundo');

//coloqui para fevereiro, pois não consegui alterarar o dia atual
//de forma que continue de modo regressivo
const inauguraDay = "feb 01 2023";


function contDown() {
    const hoje = new Date();
    const dataLanc = new Date(inauguraDay);
    

    const segTotal = (dataLanc - hoje)/1000;

    const finalDias = Math.floor (segTotal / 60 / 60 / 24);
    const finalHoras = Math.floor (segTotal / 60 / 60) % 24;
    const finalMinutos = Math.floor (segTotal / 60) % 60;
    const finalSegundos = Math.floor (segTotal) % 60;

    dia.innerHTML = finalDias
    hora.innerHTML = formatoTempo (finalHoras)
    minuto.innerHTML = formatoTempo (finalMinutos)
    segundo.innerHTML = formatoTempo (finalSegundos)
}
function formatoTempo(tempo) {
    return tempo < 10? `0${tempo}` : tempo;
    
}

contDown();
setInterval(contDown, 1000)