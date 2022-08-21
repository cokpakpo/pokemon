import { Link } from 'react-router-dom';


export const Navbar = () => {
    return (
        <>
            <header className='header'>
                <h1>Pokemon Universe</h1>
            </header>
            <nav className='navbar'>
                <Link to='/'>Pokemon List</Link>
                <Link to='/mylist'>My Pokemon List</Link>
            </nav>
        </>
    )
}