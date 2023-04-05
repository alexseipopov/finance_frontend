import './SelectButton.css'

const SelectButton = ({option, setMode, checkedButton, setCheckedButton}) => {
    const onSelection = () => {
        setMode(option)
        setCheckedButton(option)
    }
    return (
        <div className={`select__button ${checkedButton == option ? "check" : ""}`} onClick={onSelection}>
            {option}
        </div>
    )
}

export default SelectButton