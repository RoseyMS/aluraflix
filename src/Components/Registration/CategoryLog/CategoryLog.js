import "./CategoryLog.css"
import { useState } from "react"
import TextInput from "../../TextInput/TextInput";
import OptionList from "../../OptionList/OptionList";
import Button from "../../Button/Button";
//import { TextField, Button, Select, MenuItem, FormControl, InputLabel, FormHelperText } from '@mui/material';

/* Crea el componente de Registro Categoria y utilizando el componente Campo deTexto,
 desarrolle un formulario de Registro de Nueva Categoría.
Aquí será muy importante utilizar Hooks como useState y useEffect, además de map.
También no olvides usar el componente DefaultPage */
const CategoryLog = (props) => {
    /*  titulo, link del video, 
    link imagen del video, escoja la categoria, 
    descripcion, codigo de seguridad 
    y los botones guardar, limpiar, nueva categoria */
    const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];

    const [title, setTitle] = useState("")
    const [videoLink, setVideoLink] = useState("")
    const [imgLink, setImgLink] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [securityCode, setSecurityCode] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Datos enviados:', {
            title,
            videoLink,
            imgLink,
            category,
            description,
            securityCode
        });
    };


    return <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Nuevo Video</h1>
        <TextInput
            title="Título"
            placeholder="Ingrese el título de su video"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <TextInput
            title="Link del video"
            placeholder="Ingrese el link de su video"
            value={videoLink}
            onChange={(e) => setVideoLink(e.target.value)}
            required
        />
        <TextInput
            title="Link de la imagen"
            placeholder="Ingrese el link de su imagen"
            value={imgLink}
            onChange={(e) => setImgLink(e.target.value)}
            required
        />
        <OptionList
            value={category}
            setCategory={setCategory}
            categories={categories}
        />
        <TextInput
            title="Descripcion"
            placeholder="Ingrese la descripcion de su video"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        />
        <TextInput
            title="Código de seguridad"
            placeholder="Ingrese el código de seguridad"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
        />
        <div className="buttons-container">
            <div className="left-btn-container">
                <Button title="Guardar" backgroundColor="blue" color="white" />
                <Button title="Limpiar" backgroundColor="darkgrey" color="black" />

            </div>
            <Button
                title="Nueva Categoria"
                backgroundColor="blue"
                color="white" />
        </div>

    </form>
}

export default CategoryLog