import "./VideoCard.css"
import React from 'react';
/* Crea el componente VideoCard que se encargará de mostrar los videos agregados 
en la página de inicio. En él tendrás que 
ocuparte de la URL del vídeo a ser recibida y pensar en cómo se mostrará su imagen. */
const VideoCard = (props) => {
    return (
        <div className="video-card">
            <iframe width="auto" height="auto"
                title={`Video ${props.id}`}
                //src={props.url.replace('watch?v=', 'embed/')}
                src={props.url}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>

            </iframe>
        </div>
        /* <iframe width="560" height="315" src="https://www.youtube.com/embed/JTmbgLwRIvY" 
        title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
    );
};

export default VideoCard;
