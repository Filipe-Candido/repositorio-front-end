const container = document.querySelector('.container');
const qrCodeBtn = document.querySelector('#qr-form button');

const qrCodeInput = document.querySelector('#qr-form input');  // input vairiavel

const qrCodeImg = document.querySelector('#qr-code img');  // imagem do qr code

function generateQRCode() {   //função para gerar QR Code

    const qrCodeInputValue = qrCodeInput.value; //buscando valor do input 


    if (!qrCodeInputValue) return;  // se o input estiver vazio, retorna uma mensagem de erro



    qrCodeBtn.innerText = 'Gerando...';  // texto do botão muda para "Gerando..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue}`; // link para gerar qr code
    


    qrCodeImg.addEventListener("load", () => {  // evento de carregamento da imagem
    container.classList.add('active');  // adiciona a classe active ao container
    qrCodeBtn.innerText = 'Código Criado'

    });
}

 
    qrCodeBtn.addEventListener('click', () => {   // evento de click no botão para gerar qr code

    generateQRCode();



});

qrCodeInput.addEventListener("keydown", (e) => { // evento de tecla pressionada no input

    if(e.code === 'Enter') {
        generateQRCode();
    }
})


//limpar area do qr code

qrCodeInput.addEventListener('keyup', () => {

    if (!qrCodeInput.value) {
        container.classList.remove('active');
        qrCodeBtn.innerText = 'Gerar Código';
    }



})  // evento de input no input