let hora = document.getElementById('horas');
let mim = document.getElementById('minutos');

setInterval(() =>{
    let date = new Date()
    let dhora = date.getHours()
    let dminu = date.getMinutes()

    hora.innerHTML = `${formaTime(dhora)}`
    mim.innerHTML = `${formaTime(dminu)}`

}, 1000)

function formaTime(time){
    return time < 10 ? '0' + time : time
}