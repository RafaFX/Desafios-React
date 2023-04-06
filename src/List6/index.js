import './List6.css'
import Button from '../Button'
import Box from '../Box'
import React from 'react'

export class List6 extends React.Component{

    constructor(){
        super()
        this.state = {
            number: 0,
            text:'.'
        }
        this.callAsyncFunction = this.callAsyncFunction.bind(this)
        this.asyncFunc = this.asyncFunc.bind(this)
    }

    asyncFunc = () => {
        return new Promise((resolve) =>{
            this.setState({
                text:'Aguardando...'
            })
            setTimeout(() => {
                resolve( 10)
            },2000)
        })
    }


    callAsyncFunction(asyncFunc){

            
        const value = asyncFunc();
        this.setState(
            { number: value }
        )

        this.setState({
            text: 'Fim da função'
        })

    }

    render(){
        return(
            <Box h1='Desafio 6' h2={`${this.state.text} ${this.state.number}`} p='Para que o código funcione de forma assíncrona e o estado do componente mude corretamente como é o objetivo, é necessário a inclusão das palavras reservadas "async" e "await".  ' >
                <Button onClick={() => this.callAsyncFunction(this.asyncFunc)} >Change state</Button>
            </Box>
        )
    }
    
}
