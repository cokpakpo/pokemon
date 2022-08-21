import { 
    MouseEvent, 
    ReactNode, 
    ChangeEvent, 
    CSSProperties 
} from 'react';

export type ButtonProps = {
    handleClick: (event: MouseEvent<HTMLButtonElement>) => void
    name: string
    color: string
    value?: string
}

export type PokeContext = {
    pokemon: PokemonDetails[]
    addPokemon: (data: PokemonDetails) => void
    deletePokemon: (name: string) => void
}

export type PokeProvider = {
    children : ReactNode
}

export type TextInputProps = {
    value: string,
    onchangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    styles: CSSProperties
    placeholder?: string 
}

type PokemonMoves = {
    move: {
        name: string
        url?: string
    }
}

type PokemonTypes = {
    slot: number
    type: {
        name: string
        url?: string
    }
}

export type PokemonDetails = {
    name: string
    moves?: PokemonMoves[]
    types?: PokemonTypes[]
    sprites?: {
        front_default: string
    }
    nickname?: string
    weight?: number
    height?: number
}

export type LayoutProps = {
    children: ReactNode
}