import axios from 'axios'
import { useEffect, useState } from 'react'
import Container from '../containers/Container'
import './Menu.css'

const Menu = () => {
    const [data, setData] = useState([])
    // const data = [
    //     {text: "AAPL", url: "/aapl", isin: "DE0001", level: Math.floor(Math.random() * 100)},
    //     {text: "AMZN", url: "/amzn", isin: "DE0002", level: Math.floor(Math.random() * 100)},
    //     {text: "GOOG", url: "/goog", isin: "DE0003", level: Math.floor(Math.random() * 100)},
    // ]
    const getIdexes = () => {
        axios({
            url: "http://localhost:3010/api/get_all_index"
        }).then(getting_data => {
            console.log(getting_data)
            setData(getting_data.data)
        })
    }
    useEffect(() => {
        getIdexes()
    }, [])
    return (
        <div>
            <Container>
                <div className='menu'>
                    <div className="menu__table menu__table--header">
                        <div className='menu__name'>NAME</div>
                        <div className='menu__isin'>ISIN</div>
                        <div className='menu__level'>LEVEL</div>
                    </div>
                    {data.map(elem => (
                        <a href={elem.url} className="menu__table">
                            <div className='menu__name'>{elem.text}</div>
                            <div className='menu__isin'>{elem.isin}</div>
                            <div className='menu__level'>{elem.level}</div>
                        </a>
                    ))}
                </div>
            </Container>
        </div>
    )
}


export default Menu