import Button from '../Button';
import './Box.css'


const Box = (props) => {
    return(
        <div className='box' >
            <h1>{props.h1}</h1>
                <h2>{props.h2}</h2>
                <p>{props.p}</p>
                {props.children}
        </div>
    )
}

export default Box;