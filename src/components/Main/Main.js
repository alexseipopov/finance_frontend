import Container from "../containers/Container"
import GraphWindow from "../GraphWindow/GraphWindow"
import DetailInfo from "./DetailInfo/DetailInfo"

const Main = (props) => {
    return (
        <div>
            <Container>
                <DetailInfo chart_id={props.chart_id}/>
                <GraphWindow chart_id={props.chart_id} />
            </Container>
        </div>
    )
}

export default Main