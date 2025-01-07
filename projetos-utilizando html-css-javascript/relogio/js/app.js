
/* Capturando hoora, minuto e segundo com o document.querySelector */


const hour = document.querySelector('#hour');
const min = document.querySelector('#min');
const sec = document.querySelector('#sec');

/* metodo Date(). para obter a hora atual de 1 em 1 segundo data e hora atual,  getHours(), getMinutes() e getSeconds(), 
para capturarem hores minutos e segundos atuais  */
/*para modificar o contexto usamos o innerHTML  e execultamos a função formatTime atribuindo zero a valores menores q 10*/

setInterval(() =>{

    let date = new Date();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSecondes= date.getSeconds();

    hour.innerHTML = `${formatTime(currentHour)}`;
    min.innerHTML = `${formatTime(currentMinutes)}`;
    sec.innerHTML = `${formatTime(currentSecondes)}`;

}, 1000 );


function formatTime(time){
    return time <10 ?"0" + time: time;
}