import "./Header.css";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Header = ({ handleShowVideoForm }) => {
  return (
    <header className="header">
      <Link to={"/"}>
        <img
          className="logo"
          src="https://fontmeme.com/permalink/230529/053b11f53114b5c3bd349c8cef85f1a5.png"
          alt="petflix logo"
          border="0"
        ></img>
      </Link>

      <Link to={"/video-form"}>
        <Button
          title="Nuevo video"
          backgroundColor="grey"
          color="white"
          border-color="white"
          handleShowVideoForm={handleShowVideoForm}
        ></Button>
      </Link>
    </header>
  );
};

export default Header;
