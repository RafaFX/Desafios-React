import React from 'react'
import './List2.css'
import Button from '../Button'
import Box from '../Box'

export default class List2 extends React.Component {

    constructor(){
        super()
        this.state = {
            name: 'Lucas'
        }
        this.updateMyState = this.updateMyState.bind(this)
    }

    updateMyState () {
        this.setState({ name: 'Thiago' })
    }

    render(){

        return(
            <Box>
            <h1>Desafio 2</h1>
            <h2>{this.state.name}</h2>
            <p>Uma vez que utilizado o método "setState" em um class component devo utilizar uma arrow function ou bindar em um construtor o método para não ocorrer um erro de escopo.</p>
            <Button onClick={this.updateMyState}>
                Change state
            </Button>
            </Box>
        )
    }

}