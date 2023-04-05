import SelectButton from "./SelectButton/SelectButton"
import './ButtonSelectMode.css'
import { useState } from "react"

const ButtonSelectMode = ({ setMode, mode }) => {
    const possibleOption = ["1mo", "3mo", "6mo", "1y", "2y", "5y", "10y"] // "1d", "5d", 
    const [checkedButton, setCheckedButton] = useState(mode)
    return (
        <div className="button__select__mode">
            {possibleOption.map(option => (
                <SelectButton 
                    option={option} 
                    setMode={setMode} 
                    checkedButton={checkedButton}
                    setCheckedButton={setCheckedButton}
                />
            ))}
        </div>
    )
}

export default ButtonSelectMode