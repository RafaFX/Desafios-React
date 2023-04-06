import './List5.css'
import Button from '../Button';
import Box from '../Box';
import { useEffect } from 'react';
import { useState } from 'react';

const List5 = () => {

    const [count, updateCount] = useState(0);
    const [number, setNumber] = useState(0);

    function updateNumber(){
        setNumber(number + 1);
    }

    useEffect(() => {
        updateCount(count + 1)
    },[])


    return(
        <Box>
            <h1>Desafio 5</h1>
            <h1>Count = {count} Teste = {number}</h1>
            <p className='list5' >É necessário a utilização de um array de dependências vazio o qual só irá executar o "useEffect" na primeira renderização, pode-se observar que mesmo alterando o state do número de teste o "useEffect" não é executado, essa forma de "useEffect" é muito utilizado para carregamento de dados externos como um GET em uma API para que ele não seja utilizado a cada modificação na tela ou alteração de state.</p>
            <Button onClick={updateNumber} >Change state</Button>
            </Box>
    )
}

export default List5;