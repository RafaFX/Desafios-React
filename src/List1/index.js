import React from 'react'
import './List1.css'
import Button from '../Button'
import Box from '../Box'

export default class List1 extends React.Component {

    state = {
        name: 'Rafael',
        lastName: 'Silva',
        age: 21
    }

    updateMyState = () => {
        this.setState( {name:'Rafa', lastName:'Lima', age: 20})
    }
    
    render(){

        return(
            <Box>
                <h1>Desafio 1</h1>
                <h2>{this.state.name} {this.state.lastName} {this.state.age} anos</h2>
                <p>A má prática ocorre pelo fato de chamar vários setStates sem necessidade, já que tudo poderia ser feito em uma linha só.</p>
                    <Button onClick={this.updateMyState} >
                        Change state
                    </Button>
            </Box>
        )
    }
}
