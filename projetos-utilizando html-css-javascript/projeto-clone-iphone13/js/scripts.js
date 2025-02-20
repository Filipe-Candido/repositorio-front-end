const buttons = document.querySelectorAll('#image-picker li');   //adicionandos os botões a uma variável
const image = document.querySelector('#product-image');    //adicionando a imagem a uma variável


/**tEvento para cad aum dos botões  */

buttons.forEach((btn) => {                           /**fazendo um loop em cada um dos botões com foreach */
    btn.addEventListener('click', (e) => {          /**adicionando evento de clik */
      
      buttons.forEach((btn) => {    /**removendo todos os botões das classes */
      btn.querySelector('.color').classList.remove('selected');   /**removendo a classe selected */

      });

        /**adicionando a classe ao botão correto  */

        const buttom = e.target  /*encapsulando o botão  */

        const id = buttom.getAttribute('id');   /**pegando o id do botão clicado */

        buttom.querySelector('.color').classList.add('selected');   /**adicionando a classe selected ao botão clicado */


        image.classList.add('change');   /**adicionando a classe changing a imagem */
        image.setAttribute('src', `img/iphone_${id}.jpg`);   /**alterando a imagem  acessando a pasta img salva no projeto onde as imagens estã com os ids das cores*/
    
         setTimeout(() => {   /**função para remover a classe changing da imagem */
            image.classList.remove('change');
        }, 200);   /**tempo de 500 milisegundos para remover a classe changing da imagem */ 

});

    
});