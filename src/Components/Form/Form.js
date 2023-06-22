import React, { useContext } from "react";
import Button from "../Button/Button";
import TextInput from "../TextInput/TextInput";
import OptionList from "../OptionList/OptionList";
import { CategoryContext } from "../../App";
import { Link } from "react-router-dom";
import "./Form.css";
const Form = (props) => {
  const { categories } = useContext(CategoryContext);

  return (
    <form className="form" onSubmit={props.handleSubmit}>
      <h1 className="form-title">
        {props.isCategorySeleccionRequired ? "Nuevo Vídeo" : "Nueva Categoría"}
      </h1>
      {props.inputs.map((input, index) => (
        <div key={index}>
          <TextInput {...input} clearError={() => props.clearError(input.id)} />
        </div>
      ))}
      {props.isCategorySeleccionRequired && (
        <div>
          <OptionList
            categories={categories}
            category={props.category}
            setCategory={props.setCategory}
            errorMessage={props.errorMessages[5]}
            clearError={() => props.clearError(5)}
          />
        </div>
      )}
      <div className="buttons-container">
        <div className="left-btn-container">
          <Button
            type="submit"
            title="Guardar"
            backgroundColor="blue"
            color="white"
          />
          <Button
            type="button"
            title="Limpiar"
            backgroundColor="darkgrey"
            color="black"
            handleClear={props.handleClear}
          />
        </div>
        {props.isCategorySeleccionRequired && (
          <Link to={"/category-form"}>
            <Button
              title="Nueva Categoria"
              backgroundColor="blue"
              color="white"
              handleShowCategoryForm={props.handleShowCategoryForm}
            />
          </Link>
        )}
      </div>
    </form>
  );
};

export default Form;
