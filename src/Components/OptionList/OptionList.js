import "./OptionList.css"
const OptionList = (props) => {


    const handleChange = (e) => {
        props.setCategory(e.target.value)
    }

    return <div className="option-list">
        <label>Categorias</label>
        <select value={props.categories} onChange={handleChange}>
            <option value="" disabled defaultValue="" hidden>Seleccionar categoria</option>
            {props.categories.map((category, index) =>
                <option key={index} value={category}>{category}
                </option>
            )}
        </select>
    </div>
}

export default OptionList