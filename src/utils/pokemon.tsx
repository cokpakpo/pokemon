import { useState, createContext, useContext, useEffect } from 'react';
import { PokeContext, PokeProvider, PokemonDetails } from './types'

const PokemonContext = createContext<PokeContext|null>(null)

export const PokemonProvider = ({ children } : PokeProvider) => {
    const [pokemon, setPokemon] = useState<PokemonDetails[]>([]);

    const addPokemon = (data: PokemonDetails ) => {
        const filteredList = pokemon.filter(p => p.name !== data.name)
        const newData = [...filteredList, data]
        setPokemon(newData)
        localStorage.setItem('mylist', JSON.stringify(newData))

    }

    const deletePokemon = (name: string) => {
        const newData = pokemon.filter(p => p.name !== name)
        setPokemon(newData)
        localStorage.setItem('mylist', JSON.stringify(newData))
    }

    useEffect(() => {
        const mylist = localStorage.getItem('mylist');
        if (typeof mylist === 'string') {
            const pList = JSON.parse(mylist);
            if (pList && Array.isArray(pList)) {
                setPokemon(pList)
            }
        }
    }, [])
    
    return (
        <PokemonContext.Provider value= {{pokemon, addPokemon, deletePokemon}}>
            { children }
        </PokemonContext.Provider>
    )
}

export const usePokemon = () => {
    return useContext(PokemonContext)
}