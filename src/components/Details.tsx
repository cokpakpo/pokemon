import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'; 
import { usePokemon } from '../utils/pokemon';
import { PokemonDetails } from '../utils/types';
const url = 'https://pokeapi.co/api/v2/pokemon';

export const Details = () => {
    const pokeContext = usePokemon()
    const { name } = useParams()
    const [ nickname, setNickname ] = useState('')
    const [ pokemon, setPokemon ] = useState<PokemonDetails|null>(null)

    const handleClick = () => {
        if (pokemon === null || pokemon.name === '') return;
        const data = { 
            name: pokemon.name, 
            nickname,
            height: pokemon.height,
            weight: pokemon.weight, 
            sprites: pokemon?.sprites,
        };
        pokeContext?.addPokemon(data)
        setNickname('')
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNickname(e.target.value)
    }

    const fetchPokemon = async () => {     
        const { data } = await axios.get(`${url}/${name}`);
        setPokemon(data)
    }

    useEffect(() => {
       fetchPokemon();
    }, [])
    
    return (
        <>  
            <div> 
            { 
                pokemon === null ? <div className='loader'></div> : 
                <> 
                    <div className="catch">
                        <input type="text" value={nickname} onChange={(e) => inputHandler(e)}  placeholder="Add a nickname" />
                        <span className="addBtn" onClick={() => handleClick()} >Catch Pokemon</span>
                    </div>
                    <img src={ pokemon?.sprites?.front_default } alt="" width={200} />
                    <p><strong>Name:</strong> { pokemon?.name} </p>
                    <p><strong>Height:</strong> { pokemon?.height} </p>
                    <p><strong>Weight:</strong> { pokemon?.weight} </p>
                    <div><strong>Types:</strong>
                        <ul>
                            { pokemon?.types?.map((m, i) => {
                                return (
                                    <li key={i}>
                                        <strong>slot:</strong> {m.slot} <strong>type:</strong> { m?.type.name } 
                                    </li>
                                )
                            })} 
                        </ul>
                    </div>
                    <div><strong>Moves:</strong> 
                        <ul>
                            { pokemon?.moves?.map((m, i) => {
                                return (
                                    <li key={i}>
                                        { m?.move.name }
                                    </li>
                                )
                            })} 
                        </ul>
                    </div>
                    
                </>
            }
            </div>
        </>
    )
}