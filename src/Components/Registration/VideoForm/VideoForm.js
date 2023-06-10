import { v4 as uuidv4 } from 'uuid';
import "./VideoForm.css"
import { useContext, useState } from "react"
import { CategoryContext } from "../../../App"
import Form from "../../Form/Form";
import Button from "../../Button/Button";

const VideoForm = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [securityCode, setSecurityCode] = useState("")
    const [videoLink, setVideoLink] = useState("")
    const [imgLink, setImgLink] = useState("")
    const [category, setCategory] = useState("")
    const { videoRegistration } = props

    const inputs = [
        {
            id: 1,
            type: "text",
            title: "Título",
            placeholder: "Ingrese el título de su video",
            updateValue: setTitle,
            value: title
        }, {
            id: 2,
            type: "text",
            title: "Link del video",
            placeholder: "Ingrese el link de su video",
            updateValue: setVideoLink,
            value: videoLink
        }, {
            id: 3,
            type: "text",
            title: "Link de la imagen",
            placeholder: "Ingrese el link de su imagen",
            updateValue: setImgLink,
            value: imgLink
        }, {
            id: 4,
            type: "text",
            title: "Descripcion",
            placeholder: "Ingrese la descripcion de su video",
            updateValue: setDescription,
            value: description
        }, {
            id: 5,
            type: "text",
            title: "Código de seguridad",
            placeholder: "Ingrese el código de seguridad",
            updateValue: setSecurityCode,
            value: securityCode
        }
    ]
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title && videoLink && imgLink && category && description && securityCode) {
            let dataToSend = {
                //id: uuidv4(),
                title,
                videoLink,
                imgLink,
                category,
                description,
                securityCode
            }
            videoRegistration(dataToSend)
        } else {
            console.log("complete todos los campos")
        }


    };

    const handleClear = () => {
        setTitle('');
        setVideoLink('');
        setImgLink('');
        setCategory('');
        setDescription('');
        setSecurityCode('');
    };
    return <>
        <Form inputs={inputs} setCategory={setCategory} handleSubmit={handleSubmit} isCategorySeleccionRequired={props.isCategorySeleccionRequired} handleShowCategoryForm={props.handleShowCategoryForm} />

    </>
}

export default VideoForm