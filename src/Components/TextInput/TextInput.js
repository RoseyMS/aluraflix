import "./TextInput.css"

const TextInput = (props) => {

    const placeholderModified = `${props.placeholder}...`

    const { type = "text" } = props

    const handleChange = (e) => {
        props.updateValue(e.target.value)
    }

    return <div className="text-input">
        <label>{props.title}</label>
        <input
            placeholder={placeholderModified}
            required={props.required}
            value={props.value}
            onChange={handleChange}
            type={type}
        />
    </div>
}


export default TextInput 