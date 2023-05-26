import "./Button.css"

const Button = (props) => {
    return <button
        //onClick={props.onClick}
        className="button"
        style={{ backgroundColor: props.backgroundColor, color: props.color, borderColor: props.borderColor }}>
        {props.title}
    </button>
}

export default Button