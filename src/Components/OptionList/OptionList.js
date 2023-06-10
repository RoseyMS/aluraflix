import "./OptionList.css"
const OptionList = (props) => {

    const handleChange = (e) => {
        props.setCategory(e.target.value)
    }

    return (
        <div className="option-list">
            <label>Categoría</label>
            <select value={props.value} onChange={handleChange}>
                <option value="" disabled defaultValue>Seleccionar categoria</option>
                {props.categories.map((category, index) => (
                    <option key={index} value={category.value}>{category.title}</option>
                ))}
            </select>
        </div>
    );

}

export default OptionList