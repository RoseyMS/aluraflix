import "./Button.css"

const Button = (props) => {
    const handleClick = () => {
        if (typeof props.handleShowCategoryLog === "function") {
            props.handleShowCategoryLog();
        }
        if (typeof props.handleShowVideoLog === "function") {
            props.handleShowVideoLog();
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