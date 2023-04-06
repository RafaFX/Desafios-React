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
        this.updateName = this.updateName.bind(this)
    }

    updateName() {
        //let name = this.props.name
        // let { name } = this.props;
        //name = "Other name"
    }

    render() {
        return(
            <Box p='Props são read-only portanto não podem ser alteradas' h1='Desafio 4' h2={this.state.name}>
            <Button onClick={this.updateName} >Change state</Button>
            </Box>
        )
    }
}