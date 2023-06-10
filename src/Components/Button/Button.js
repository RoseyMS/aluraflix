import "./Button.css"

const Button = (props) => {

    const handleClick = () => {
        if (typeof props.handleShowVideoForm === "function") {
            props.handleShowVideoForm();
        }
        if (typeof props.handleShowCategoryForm === "function") {
            props.handleShowCategoryForm();
        }
        if (typeof props.handleClear === "function") {
            props.handleClear();
        }
    };

    return <button
        onClick={handleClick}
        className="button"
        style={
            {
                backgroundColor: props.backgroundColor,
                color: props.color,
                borderColor: props.borderColor
            }}>
        {props.title}

    </button>
}

export default Button