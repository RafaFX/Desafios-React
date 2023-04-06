import Box from '../Box'
import Button from '../Button'
import './List4.css'
import React from 'react'

export default class List4 extends React.Component{

    constructor(){
        super()
        this.state ={
            name: 'Rafael'
        }
    }

    updateName() {
        let { name } = this.props;
        name = "Other name"
    }

    render() {
        return(
            <Box>
            <h1>Desafio 4</h1>
            <h1>{this.state.name}</h1>
            <Button onClick={this.updateName} >Change state</Button>
            </Box>
        )
    }
}