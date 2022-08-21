
import { ButtonProps } from '../utils/types'

export const Button = ({color, name, value, handleClick}: ButtonProps) => {
    return <button className='button' value={value} onClick={(e) => handleClick(e)}>{name}</button>
}