import { v4 as uuidv4 } from "uuid";

const videosList = () => {
  //joyous-plum-garters.cyclic.app/videos
  https: return fetch("http://localhost:8000/videos").then((respuesta) =>
    respuesta.json()
  );
};

const addVideo = (
  title,
  videoLink,
  imgLink,
  category,
  description,
  securityCode
) => {
  return fetch("http://localhost:8000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: uuidv4(),
      title,
      videoLink,
      imgLink,
      category,
      description,
      securityCode,
    }),
  });
};

export const videoServices = {
  videosList,
  addVideo,
};
