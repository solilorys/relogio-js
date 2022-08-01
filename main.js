const horas = document.querySelector(".horas");
const minutos = document.querySelector(".minutos");
const segundos = document.querySelector(".segundos");

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if (horas > 12) {
        total = hora + 1
    }

    horas.innerHTML = hora;
    minutos.innerHTML = minuto;
    segundos.innerHTML = segundo;
})