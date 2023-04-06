import './Button.css'
import React from 'react'

export default class Button extends React.Component{

    render(){
        return(
            <div className='container'>
            <button className='buttonState' onClick={this.props.onClick}>
                {this.props.children}
            </button>
            </div>
        )
    }
    
}