import "./Header.css"
import Button from "../Button/Button"

const Header = ({ handleShowCategoryLog }) => {

    return <header className="header">

        <a href="">
            <img className="logo" src="https://fontmeme.com/permalink/230529/053b11f53114b5c3bd349c8cef85f1a5.png"
                alt="petflix logo" border="0">
            </img>
        </a>
        <Button
            title="Nuevo video"
            backgroundColor="grey"
            color="white"
            border-color="white"
            handleShowCategoryLog={handleShowCategoryLog}
        >
        </Button>
    </header>
}

export default Header