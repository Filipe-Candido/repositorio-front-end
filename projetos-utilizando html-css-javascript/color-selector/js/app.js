const container = document.querySelector('.container');  /*document.querySelector =  recebe o como parametro o identificador que o elemento deve buscar no caso a classe container */   
const color = document.querySelector('input'); /* recebe como parametro a cor que o usuário selecionar */

const defaultColor ='#fff';  
container.style.backgroundColor = defaultColor;

/*Função onChangeBG que alterará o fundo da pagina */

function onChangeBg(){
container.style.backgroundColor =`${color.value}`;
}