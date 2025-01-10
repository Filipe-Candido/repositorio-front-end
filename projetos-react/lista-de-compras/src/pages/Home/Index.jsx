import {useRef, useState} from 'react'
import { v4 } from 'uuid'
import { AddButtton, Container} from './styles'
import { HiOutlineTrash } from "react-icons/hi";


function Home() {

  
  const[produtos, setProdutos] = useState([])
  const inputRef = useRef()


  function adicionarProduto(){

  setProdutos([{id: v4(),nome: inputRef.current.value}, ...produtos])    //adicionar ... spredOperator adicinar produtos identificados com Id
  inputRef.current.value ='' // limpar input 
}

  function deletarProduto(id){             // FUNÇÃO DELETAR PRODUTOS   
   
    setProdutos(produtos.filter(produto => produto.id !== id))

}





  return (

      <Container> 
        <h1>Lista de Compras</h1>
        
        <input placeholder="Produto..." ref={inputRef}/>
        <AddButtton onClick={adicionarProduto}>Adicionar</AddButtton>

      
      {
        produtos.map((produto) =>(
        
        <div class ="product" key={produto.id} >
        <p>{produto.nome}</p>
        <buttton onClick={() =>deletarProduto(produto.id)}><HiOutlineTrash class ="trash-icon"/></buttton>

        
        </div>        

          ))

      }


      
      </Container>
  


  )


} 


export default Home
