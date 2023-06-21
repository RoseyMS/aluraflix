import "./TextInput.css";

const TextInput = (props) => {
  const placeholderModified = `${props.placeholder}...`;

  const { type = "text" } = props;

  const handleChange = (e) => {
    props.updateValue(e.target.value);
    props.clearError();
  };

  return (
    <div className="text-input">
      <label>{props.title}</label>
      <input
        placeholder={placeholderModified}
        value={props.value}
        onChange={handleChange}
        type={type}
      />
      {props.error !== "" && (
        <span className="error-message">{props.error}</span>
      )}
    </div>
  );
};

export default TextInput;
