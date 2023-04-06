import './List7.css'
import Box from '../Box';

const List7 = () => {

    const data = [
        {
            id: 0,
            name: "Michael Jordan"
        }
        ,
        {
            id: 1,
            name: "Michael Jordan com gripe"
        }
        ,
        {
            id: 2,
            name: "Michael Jordan primeira aposentadoria jogando baseball"
        }
        ,
        {
            id: 3,
            name: "Michael Jordan no Wizards"
        }
        ,
        {
            id: 4,
            name: "Michael Jordan na segunda aposentadoria"
        } 
        ,
        {
            id: 5,
            name: "Lebron James"
        }
    ]

    return(
        <Box h1='Desafio 7' h2='Lista dos top 6 melhores jogadores da história do basquete em sequência:' p='Toda a lista de um array necessita de uma key única para que o react saiba a qual item do array cada componente está se referindo, isso se torna imprescindível caso a sua lista seja editável, por exemplo, excluir, editar e ordenar de várias formas os itens num array. É importante ressaltar que para evitar bugs não se deve usar o index do item como key, pois assim que seu array mudar de ordem causara bugs' >
            <ul className='ul'>
                {data.map((item) => <li key={item.id} >- {item.name}</li> )}
            </ul>
        </Box>
    )
}

export default List7;