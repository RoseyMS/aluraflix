
import "./VideoForm.css"
import { useState } from "react"
import Form from "../../Form/Form";

const VideoForm = (props) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [securityCode, setSecurityCode] = useState("")
    const [videoLink, setVideoLink] = useState("")
    //const [imgLink, setImgLink] = useState("")
    const [category, setCategory] = useState("")
    const [errorMessages, setErrorMessages] = useState({});

    const { videoRegistration } = props

    const inputs = [
        {
            id: 1,
            type: "text",
            title: "Título",
            placeholder: "Ingrese el título de su video",
            updateValue: setTitle,
            value: title,
            error: errorMessages[1] || ''
        },
        {
            id: 2,
            type: "text",
            title: "Enlace del video",
            placeholder: "Ejemplo: https://www.youtube.com/enlace",
            updateValue: setVideoLink,
            value: videoLink,
            error: errorMessages[2] || ''
        },
        {
            id: 3,
            type: "text",
            title: "Descripcion",
            placeholder: "Ingrese la descripcion de su video",
            updateValue: setDescription,
            value: description,
            error: errorMessages[3] || ''
        },
        {
            id: 4,
            type: "text",
            title: "Código de seguridad",
            placeholder: "Ingrese el código de seguridad",
            updateValue: setSecurityCode,
            value: securityCode,
            error: errorMessages[4] || ''
        }
    ];


    const validateFields = () => {
        const errors = {};

        if (!title) {
            errors[1] = 'El campo título es obligatorio.';
        }
        if (!videoLink) {
            errors[2] = 'El campo enlace del video es obligatorio.';
        } else {
            const youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?(?:\S*?&)?v=|v\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
            if (!youtubeRegex.test(videoLink)) {
                errors[2] = 'El enlace del video no es válido.';
            }
        }
        if (!description) {
            errors[3] = 'El campo descripción es obligatorio.';
        }
        if (!securityCode) {
            errors[4] = 'El campo código de seguridad es obligatorio.';
        }
        if (!category) {
            errors[5] = 'El campo categoría es obligatorio.';
        }
        return errors;
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = validateFields();

        if (Object.keys(errors).length === 0) {

            const videoId = videoLink.replace(/^(?:https?:\/\/)?(?:www\.)?youtu\.be\/([^\s]+)/, "$1");
            const modifiedVideoLink = `https://www.youtube.com/embed/${videoId}`;
            const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

            let dataToSend = {
                title,
                videoLink: modifiedVideoLink,
                imgLink: thumbnailUrl,
                category,
                description,
                securityCode
            }
            videoRegistration(dataToSend)
        } else {
            setErrorMessages(errors);
            console.log(errors)

        }

    };

    function handleClear() {
        inputs.forEach((input) => {
            input.updateValue('');
        });
    };
    return <>
        <Form inputs={inputs} category={category} setCategory={setCategory} handleClear={handleClear} handleSubmit={handleSubmit} isCategorySeleccionRequired={props.isCategorySeleccionRequired} handleShowCategoryForm={props.handleShowCategoryForm} />

    </>
}

export default VideoForm