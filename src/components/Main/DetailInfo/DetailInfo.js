
import { useState } from "react"
import './DetailInfo.css'
import InfoLine from "./InfoLine/InfoLine"
const DetailInfo = ({chart_id}) => {
    const [metadata, setMetadata] = useState([
        {name: "qwerty1", value: "123 - 145"},
        {name: "qwerty1", value: "123 - 145"},
        {name: "qwerty1", value: "123 - 145"},
        {name: "qwerty1", value: "123 - 145"},
        {name: "qwerty1", value: "123 - 145"},
        {name: "qwerty1", value: "123 - 145"},
    ]) // storage metadata
    
    return (
        <div className="detail__info">
            {metadata.map(line => (
                <InfoLine line={line} />
            ))}
        </div>
    )
}

export default DetailInfo