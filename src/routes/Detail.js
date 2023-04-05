import { useParams } from "react-router"
import Main from "../components/Main/Main"
import Top from "../components/Top/Top"

const Detail = () => {
    const {id} = useParams()
    return (
        <div>
            <Top />
            <Main chart_id={id} />
        </div>
    )
}

export default Detail