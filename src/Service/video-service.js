import { v4 as uuidv4 } from 'uuid';


const videosList = () => {
    fetch("http://localhost:8000/videos")
        .then((respuesta) => respuesta.json())
}
//"https://periwinkle-dhole-wear.cyclic.app/client"


const addVideo = (title, videoLink, imgLink, category, description, securityCode) => {

    return fetch("http://localhost:8000/videos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: uuidv4(),
            title,
            videoLink,
            imgLink,
            category,
            description,
            securityCode
        })
    });
}


/* const videoDetails = (id) => {
    return fetch(`http://localhost:8000/videos/${id}`).then(respuesta =>
        respuesta.json()
    );
}  */


export const videoServices = {
    videosList,
    addVideo,
    /*  videoDetails */
};