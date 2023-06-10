import { v4 as uuidv4 } from 'uuid';
import Table from "../../Table/Table";
import { useState, useContext } from "react";
import { CategoryContext } from "../../../App";
import Form from "../../Form/Form";

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
        // if (!name || !description || color || !securityCode) {
        const dataToSend = {
            id,
            title: name,
            description,
            color,
            securityCode
        }
        categoryRegistration(dataToSend)
        //}
    };

    const onEdit = (editedCategory) => {
        console.log("CategoryForm-editedCategory-editedCategory.id", editedCategory.id)
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
    };
    const handleDelete = (id) => {
        const newCategories = categories.filter((category) => category.id !== id);
        setCategories(newCategories);
        handleClear();
    };
    return <>
        <Form inputs={inputs} handleSubmit={handleSubmit} handleClear={handleClear} />
        <Table onDelete={handleDelete} onEdit={onEdit} />
    </>
}
export default CategoryForm