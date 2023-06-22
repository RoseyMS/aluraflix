import { v4 as uuidv4 } from "uuid";

const videosList = () => {
  return fetch("https://perfect-sari-crab.cyclic.app/videos").then(
    (respuesta) => respuesta.json()
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
  return fetch("https://perfect-sari-crab.cyclic.app/videos", {
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
