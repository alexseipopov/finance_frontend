import { useState } from "react"
import Graph from "../Graph/Graph"
import ButtonSelectMode from "./ButtonSelectMode/ButtonSelectMode"
import './GraphWindow.css'

const GraphWindow = (props) => {
    // chart id from props
    const [mode, setMode] = useState("1mo")
    console.log(mode);
    return (
        <div className="graph__window">
            <ButtonSelectMode mode={mode} setMode={setMode} />
            <Graph chart_id={props.chart_id} mode={mode}/>
        </div>
    )
}

export default GraphWindow