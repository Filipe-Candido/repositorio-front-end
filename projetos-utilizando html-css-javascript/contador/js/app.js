const value = document.querySelector('#value'); /*capturar o valor do span atraves do documnt.querySelector passando a value como parametro */

function onIncrement(){
        
    let currentValue = parseInt(value.textContent);
        if (!isNaN(currentValue)){

        value.textContent = currentValue +1;
 }
}

function onDecrement(){

    let currentValue = parseInt(value.textContent);
    if (!isNaN(currentValue)){
    value.textContent = currentValue - 1;
}



}