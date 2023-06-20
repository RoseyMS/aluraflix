
import Table from "../../Table/Table";
import { useState, useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { CategoryContext } from "../../../App";
import Form from "../../Form/Form";
import { categoriesServices } from "../../../Service/categories-service";

const CategoryForm = (props) => {
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [color, setColor] = useState("")
    const [securityCode, setSecurityCode] = useState("")
    const inputs = [
        {
            id: 1,
            type: "text",
            title: "Nombre",
            placeholder: "Ingrese el nombre de la categoría",
            updateValue: setName,
            value: name
        },
        {
            id: 2,
            type: "text",
            title: "Descripcion",
            placeholder: "Ingrese la descripción de la categoría",
            updateValue: setDescription,
            value: description
        },
        {
            id: 3,
            type: "color",
            title: "Color",
            placeholder: "Seleccione el color de la categoría",
            updateValue: setColor,
            value: color
        },
        {
            id: 4,
            type: "text",
            title: "Codigo de seguridad",
            placeholder: "Ingrese el código de seguridad",
            updateValue: setSecurityCode,
            value: securityCode
        }
    ]
    const { categories, setCategories } = useContext(CategoryContext)
    const { categoryRegistration } = props

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name && description && color && securityCode) {
            const dataToSend = {
                id: id === "" ? uuidv4() : id,
                title: name,
                description,
                color,
                securityCode
            }
            console.log(dataToSend)
            categoryRegistration(dataToSend)
            handleClear()
        } else {
            console.log("complete todos los campos")
        }
    };

    const onEdit = (editedCategory) => {
        setId(editedCategory.id)
        setName(editedCategory.title);
        setDescription(editedCategory.description);
        setColor(editedCategory.color);
        setSecurityCode(editedCategory.securityCode);
    }


    function handleClear() {
        inputs.forEach((input) => {
            input.updateValue('');
        });
        setId("")
        setName("");
        setDescription("");
        setColor("");
        setSecurityCode("");
    };
    const handleDelete = (id) => {
        categoriesServices.deleteCategory(id)
            .then(() => {
                const newCategories = categories.filter((category) => category.id !== id);
                setCategories(newCategories);
                handleClear();
            })
            .catch((error) => {
                console.error("Error al eliminar la categoría", error);
            });
    };

    return <>
        <Form inputs={inputs} handleSubmit={handleSubmit} handleClear={handleClear} />
        <Table onDelete={handleDelete} onEdit={onEdit} />
    </>
}
export default CategoryForm