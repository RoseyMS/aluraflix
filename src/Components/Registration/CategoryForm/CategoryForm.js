import Table from "../../Table/Table";
import { useState, useContext } from "react";
import { CategoryContext } from "../../../App";
import Form from "../../Form/Form";
import { categoriesServices } from "../../../Service/categories-service";
import { v4 as uuidv4 } from "uuid";

const CategoryForm = (props) => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const inputs = [
    {
      id: 1,
      type: "text",
      title: "Nombre",
      placeholder: "Ingrese el nombre de la categoría",
      updateValue: setName,
      value: name,
      error: errorMessages[1] || "",
    },
    {
      id: 2,
      type: "text",
      title: "Descripcion",
      placeholder: "Ingrese la descripción de la categoría",
      updateValue: setDescription,
      value: description,
      error: errorMessages[2] || "",
    },
    {
      id: 3,
      type: "color",
      title: "Color",
      placeholder: "Seleccione el color de la categoría",
      updateValue: setColor,
      value: color,
      error: errorMessages[3] || "",
    },
    {
      id: 4,
      type: "text",
      title: "Codigo de seguridad",
      placeholder: "Ingrese el código de seguridad",
      updateValue: setSecurityCode,
      value: securityCode,
      error: errorMessages[4] || "",
    },
  ];
  const { categories, setCategories } = useContext(CategoryContext);
  const { categoryRegistration } = props;
  const validateFields = () => {
    const errors = {};

    if (!name) {
      errors[1] = "El campo nombre es obligatorio.";
    }

    if (!description) {
      errors[2] = "El campo descripción es obligatorio.";
    }
    if (!color) {
      errors[3] = "El campo color es obligatorio.";
    }
    if (!securityCode) {
      errors[4] = "El campo código de seguridad es obligatorio.";
    }

    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateFields();

    if (Object.keys(errors).length === 0) {
      const dataToSend = {
        id: id === "" ? uuidv4() : id,
        title: name,
        description,
        color,
        securityCode,
      };
      categoryRegistration(dataToSend);

      handleClear();
    } else {
      setErrorMessages(errors);
      console.log(errors);
    }
  };

  const onEdit = (editedCategory) => {
    setId(editedCategory.id);
    setName(editedCategory.title);
    setDescription(editedCategory.description);
    setColor(editedCategory.color);
    setSecurityCode(editedCategory.securityCode);
  };

  function handleClear() {
    inputs.forEach((input) => {
      input.updateValue("");
    });
    setId("");
    setName("");
    setDescription("");
    setColor("");
    setSecurityCode("");
  }
  const handleDelete = (id) => {
    categoriesServices
      .deleteCategory(id)
      .then(() => {
        const newCategories = categories.filter(
          (category) => category.id !== id
        );
        setCategories(newCategories);
        handleClear();
      })
      .catch((error) => {
        console.error("Error al eliminar la categoría", error);
      });
  };
  function clearError(key) {
    if (errorMessages[key]) {
      const newErrors = { ...errorMessages };
      delete newErrors[key];
      setErrorMessages(newErrors);
    }
  }

  return (
    <>
      <Form
        inputs={inputs}
        errorMessages={errorMessages}
        clearError={clearError}
        handleClear={handleClear}
        handleSubmit={handleSubmit}
      />
      <Table onDelete={handleDelete} onEdit={onEdit} />
    </>
  );
};
export default CategoryForm;
