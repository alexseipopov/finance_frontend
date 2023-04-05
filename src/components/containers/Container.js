import styles from './Container.module.css'

const Container = ({children, ...styless}) => {
    return (
        <div {...styless} className={styles.container}>
            {children}
        </div>
    )
}

export default Container