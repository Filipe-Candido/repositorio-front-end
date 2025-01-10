import styled from "styled-components";


export const AddButtton = styled.button  `

        background: #6cf000;
        color:#2e2c2c;
        height: 35px;
        width: 80px;    
        border-radius: 5px;
        margin-left: 15px;
        font-weight: bold;
        border: 1px solid #fff;
        outline: none;
        margin-bottom: 10px;


        &:hover{
        opacity: 0.8;
        }
`


export const Container = styled.div `
    
        background: #b752ff;
        padding: 20px;
        border-radius: 10px;
        /* text-align: center; */

        .product{

            display: flex ;
            background-color: #4b3252;
            border: solid 1px #000;
            border-radius: 5px;
            margin-bottom: 10px;
            padding: 20px;
            justify-content: space-between;

        }


        h1{

            color: #fff;
            font-weight: bold;
            font-size: 30px;
            text-align: center;
        }

        input{

            width: 400px;
            margin-top: 50px;
            height: 35px;
            border-radius: 5px;
            margin-bottom: 20px;
            border: none;
            outline: none;
            padding-left: 10px;
            font-size: 20px;
            } 

        p{
            color: #fff;
            text-align: left;
            font-size: 30px;
            text-transform: capitalize;
        
        }

        .trash-icon{

            color:#fff;
            margin-top: 2px;
            margin-left:300px;
            width: 3vh;
            height: 3vh;
            cursor: pointer;
        }

        .trash-icon:hover{

            opacity: 0.8;


            }

   

`

