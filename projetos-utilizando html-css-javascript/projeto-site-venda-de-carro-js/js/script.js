let prevButton = document.getElementById ('prev')
let nextButton = document.getElementById ('next')
let container = document.querySelector ('.container')
let items = document.querySelectorAll ('.list .item')
let indicator = document.querySelector('.indicators')
let dots = indicator.querySelectorAll ('ul li')
let list = container.querySelector('.list')


let active = 0
let firstPosition = 0
let lastPosition = items.length -1






nextButton.onclick = () => {

        list.style.setProperty('--calculation',1)

        let itemOld = items[active]
        itemOld.classList.remove('active')

        active = active +1 > lastPosition ? 0 : active +1
        items[active].classList.add('active')

        indicator.querySelector('.number') .innerHTML = '0' + (active +1)

        updateIndicators()
}

prevButton.onclick = () => {

         list.style.setProperty('--calculation', -1)
        let itemOld = items[active]
        itemOld.classList.remove('active')

        active = active -1 < firstPosition ? lastPosition : active -1
        items[active].classList.add('active')
        indicator.querySelector('.number') .innerHTML = '0' + (active +1)
     

        updateIndicators()

}


function  updateIndicators() {

    dots.forEach(dot => dot.classList.remove('active'))
    dots[active].classList.add('active')

   
}
