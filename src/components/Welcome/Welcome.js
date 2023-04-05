import Container from "../containers/Container"
import Header from "./Header/Header"
import styles from './Welcome.module.css'
import bg from '../../static/bg.jpg' //avif
import Intro from "./Intro/Intro"

const Welcome = () => {
    return (
        <div 
            className={styles.welcome} 
            style={{
                backgroundImage:`url(${bg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <Container style={{
                display: "flex", 
                justifyContent: "space-between", 
                flexDirection: "column"
            }}>
                <Header/>
                <Intro />
            </Container>
        </div>
    )
}

export default Welcome