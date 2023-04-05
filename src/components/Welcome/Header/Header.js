import styles from './Header.module.css'
import Logo from './Logo/Logo'
import Nav from './Nav/Nav'

const Header = () => {
    return (
        <div className={styles.header}>
            <Logo />
            <Nav />
        </div>
    )
}

export default Header