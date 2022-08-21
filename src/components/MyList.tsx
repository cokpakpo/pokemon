import { usePokemon } from '../utils/pokemon';
import { Button } from './Button';

export const MyList = () => {
    const myPokemon = usePokemon()
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        myPokemon?.deletePokemon(e.currentTarget.value)
    }
    const myLen = myPokemon?.pokemon.length === undefined ? 0 : myPokemon?.pokemon.length;
    return (
        <>  
            <div className='mylist'>
            {
                myLen < 1  ? 'No captured pokemon on my list' :
                <div className="row">
                    { 
                        myPokemon?.pokemon.map((p, index) => {
                            return (
                                <div className="column" key={index}>
                                    <div className="content">
                                        <img src={ p.sprites?.front_default } alt="" style={{width:100}} />
                                        <p><strong>name:</strong> {p.name}</p>
                                        <p><strong>nickname:</strong> {p.nickname}</p>
                                        <p><strong>weight:</strong> {p.weight}</p>
                                        <p><strong>height:</strong> {p.height}</p>
                                        <Button
                                            value = {p.name} 
                                            name='Release' 
                                            handleClick={handleClick} 
                                            color='green'
                                        />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            }
            </div> 
        </>
    )
}