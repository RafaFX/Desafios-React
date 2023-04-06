import Box from '../Box'
import Button from '../Button'
import './List3.css'
import React from 'react'

export default class List3 extends React.Component{
    
    constructor(){
        super()
        this.state = {
            name : 'Rafael'
        }
        this.updateMyState = this.updateMyState.bind(this);
        this.myCallback = this.myCallback.bind(this);
    }
    

    myCallback(name) {
        console.log(name)
    }

    updateMyState(myCallback) {
        this.setState({ name: "Rafael Lima"} , () => myCallback(this.state.name));
    }
    
    render() {
        return(
            <Box h1='Desafio 3' h2={this.state.name} p='Irá chegar o valor antigo, a má prática está no fato de executar o método "myCallback" dentro de outro método ao invés de apenas declará-lo, dessa forma ele vai utilizar o valor "antigo" do state.' >
            <Button onClick={() =>this.updateMyState(this.myCallback)} >Change state</Button>
            </Box>
        )
    }
}