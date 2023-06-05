import Button from "../../Button/Button";
import TextInput from "../../TextInput/TextInput";
import { useState } from "react";


const VideoLog = (props) => {


    const categories = ['Categoría 1', 'Categoría 2', 'Categoría 3'];
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")
    const [securityCode, setSecurityCode] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Datos enviados:', {
            title,
            color,
            securityCode
        });
    };
    /* const handleLimpiar = () => {
        setTitle('');
        setColor('');
        setSecurityCode('');
    }; */

    return <form className="form" onSubmit={handleSubmit}>
        <h1 className="form-title">Nueva Categoria</h1>
        <TextInput
            title="Nombre"
            placeholder="Ingrese el nombre de la categoría"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
        />
        <TextInput
            type="color"
            title="Link del video"
            placeholder="Ingrese el link de su video"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            required
        />
        <TextInput
            title="Codigo de seguridad"
            placeholder="Ingrese código de seguridad"
            value={securityCode}
            onChange={(e) => setSecurityCode(e.target.value)}
            required
        />
        <div className="buttons-container">
            <div className="left-btn-container">
                <Button title="Guardar" backgroundColor="blue" color="white" />
                <Button title="Limpiar" backgroundColor="darkgrey" color="black" />
            </div>
        </div>

    </form>
}
export default VideoLog