import { useState } from 'react'
import styles from './Nav.css'

const Nav = () => {
    const links = [
        {text: "About Us", url: "/"},
        {text: "Contacts", url: "/"},
        {text: "Login", url: "/"},
        {text: "Search", url: "/"},
    ]
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className='nav'>
            <ul className={`nav__list ${isMenuOpen ? 'nav__list--open' : ''}`}>
                {links.map(elem => (
                    <li className='nav__item'>
                        <a href={elem.url} className="nav__link">{elem.text}</a>
                    </li>
                ))}
            </ul>
            {/* <div className="nav__burger" onClick={toggleMenu}>
                <div className={`nav__burger-line ${isMenuOpen ? 'nav__burger-line--open' : ''}`}></div>
                <div className={`nav__burger-line ${isMenuOpen ? 'nav__burger-line--open' : ''}`}></div>
                <div className={`nav__burger-line ${isMenuOpen ? 'nav__burger-line--open' : ''}`}></div>
            </div> */}
        </nav>
    )
}

export default Nav