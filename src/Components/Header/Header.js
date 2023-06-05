import "./Header.css"
import Button from "../Button/Button"

const Header = ({ handleShowCategoryLog }) => {

    return <header className="header">

        <a href="">
            <img className="logo" src="https://fontmeme.com/permalink/230526/e6e3b85ffddbadafa4d505d5ec1007f8.png"
                alt="catflix logo" border="0">
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