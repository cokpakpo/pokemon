
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { usePokemon } from '../utils/pokemon';
const url = 'https://pokeapi.co/api/v2/pokemon';

export const List = () => {
    const pContext = usePokemon();
    const navigate = useNavigate();
    const [ list, setList ] = useState([])

    const showDetails = (name:string) => {
        navigate(`/details/${name}`)
    }

    const fetchPokemon = async () => {     
        const { data } = await axios.get(url);
        setList(data.results)
    }
    
    useEffect(() => {
        fetchPokemon();
    },[]);
    
    const pokemonList = list.map(({name}: any, index) => {
        return ( <li key={index} onClick={() => showDetails(name)}>{name}</li>)
    });
    return (
        <>  
            <h4>Owned Total: <span className='badge'> { pContext?.pokemon.length } </span></h4>
            { 
                list.length < 1 ? <div className='loader'></div> : 
                <div className='list'>
                    <ul> { pokemonList } </ul>
                </div>
            }
        </>
    )
}