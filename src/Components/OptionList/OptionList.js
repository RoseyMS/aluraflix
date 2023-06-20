import "./OptionList.css"
const OptionList = (props) => {

    const handleChange = (e) => {
        props.setCategory(e.target.value)
        console.log(props.value)
    }

    return (
        <div className="option-list">
            <label>Categoría</label>
            <select
                value={props.value}
                onChange={handleChange}>
                <option
                    value=""
                    disabled
                    defaultValue
                >Seleccionar categoria</option>
                {props.categories.map((category, index) => (
                    <option key={index} value={category.value}>{category.title}</option>
                ))}
            </select>
            {props.category === '' && (
                <span className="error-message">El campo categoría es obligatorio</span>

            )}
        </div>
    );

}

export default OptionList