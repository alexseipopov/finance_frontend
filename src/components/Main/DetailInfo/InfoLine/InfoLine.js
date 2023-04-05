import './InfoLine.css'
const InfoLine = ({line}) => {
    return (
        <div className="info__line">
            <p>{line.name}</p>
            <p>{line.value}</p>
        </div>
    )
}

export default InfoLine