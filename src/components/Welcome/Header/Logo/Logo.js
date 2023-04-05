import styles from './Logo.module.css'
import logo from '../../../../static/logo.svg'

const Logo = () => {
    return (
        <div className={styles.logo}>
            <a href='/'>
                <img src={logo} alt="logo" />
            </a>
        </div>
    )
}

export default Logo