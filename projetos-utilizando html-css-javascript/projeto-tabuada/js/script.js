//seleção de elemntos 

const multiplicationForm = document.querySelector('#multiplication-form')
const numberInput = document.querySelector('#number')
const multiplicationInput = document.querySelector('#multiplicator')

const multiplicationTable = document.querySelector('#multiplication-operations')

const multiplicationTitle = document.querySelector('#multiplication-title span')

//função

const createTable = (number, multiplicatorNumber) => {  //arrow function

        multiplicationTable.innerHTML =""  //limpando html para liberar os valores

        for( i =0; i <= multiplicatorNumber; i++){

            const result = number*i

            const template = `<div class="row">
            
                    <div class ="operation">${number} x ${i} = </div>
                    <div class ="result">${result}</div>
                </div>`

            const parser = new DOMParser()
            const htmlTemplate = parser.parseFromString(template, "text/html")

            const row = htmlTemplate.querySelector('.row')

            multiplicationTable.appendChild(row)
        }


        multiplicationTitle.innerText =number
}


//Eventos


multiplicationForm.addEventListener("submit",(e)=>  {


        e.preventDefault()

        const multiplicationNumber = +numberInput.value
        const multiplicatorNumber = +multiplicationInput.value

        if(!multiplicationNumber || !multiplicatorNumber)  // se algum dos campos não forem preenchidos
            return
            
        
        createTable(multiplicationNumber, multiplicatorNumber)
    
})