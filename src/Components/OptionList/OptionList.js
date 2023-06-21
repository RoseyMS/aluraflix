import "./OptionList.css";
const OptionList = (props) => {
  const handleChange = (e) => {
    props.setCategory(e.target.value);
    props.clearError();
    console.log(props.value);
  };

  return (
    <div className="option-list">
      <label>Categoría</label>
      <select
        value={props.category ? props.category.id : ""}
        onChange={handleChange}
      >
        <option value="" defaultValue="" disabled>
          Seleccionar categoría
        </option>
        {props.categories.map((category, index) => (
          <option key={index} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
      {props.errorMessage && (
        <span className="error-message">{props.errorMessage}</span>
      )}
    </div>
  );
};

export default OptionList;
