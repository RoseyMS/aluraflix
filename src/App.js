import MuiAlert from "@mui/material/Alert"
import Snackbar from "@mui/material/Snackbar";
import { videoServices } from "./Service/video-service";
import { categoriesServices } from "./Service/categories-service"
import React, { createContext, useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
//import Home from "./Components/Home/Home"
import CategoryForm from "./Components/Registration/CategoryForm/CategoryForm";
import VideoForm from "./Components/Registration/VideoForm/VideoForm";

export const CategoryContext = createContext()
export const VideoContext = createContext()
/* NOTES: 
"El mundo de lo inesperado. Una mezcla de criaturas diferentes y encantadoras que desafían las categorías tradicionales.",
"La realeza felina. Seres misteriosos y adorables con el poder de hacerte sentir inferior y amarlos incondicionalmente. ¡Prepárate para ser su súbdito y recibir la dosis diaria de ronroneos y miradas despectivas!"
"Los eternos optimistas peludos. Siempre listos para una aventura, un juego o un abrazo. ¡Son los maestros de la cola en constante movimiento y la cara de '¿me llevarás contigo?' que te derrite el corazón!"   */

const Alert = React.forwardRef(function Alert(props, ref) {
  const { message, ...otherProps } = props;
  return <MuiAlert elevation={6} ref={ref} {...otherProps}>{message}</MuiAlert>;
});

function App() {

  const [showVideoForm, setShowVideoForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [isCategorySeleccionRequired, setCategorySeleccionRequired] = useState(true);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    categoriesServices.categoriesList()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías", error);
      });
  }, []);

  /*  const [videos, setVideos] = useState([{
     id: 1,
     title: "Gatitos con musica suave",
     videoLink: "https://www.youtube.com/embed/JTmbgLwRIvY",
     imgLink: "https://img.youtube.com/vi/JTmbgLwRIvY/maxresdefault.jpg",
     category: "gatos",
     description: "gatos con musica suave",
     securityCode: "1234"
   },
   {
     id: 2,
     title: "Gatitos con musica suave",
     videoLink: "https://www.youtube.com/embed/C81RmDpM8Mo",
     imgLink: "https://img.youtube.com/vi/JTmbgLwRIvY/maxresdefault.jpg",
     category: "perros",
     description: "gatos con musica suave",
     securityCode: "1234"
   },
   {
     id: 3,
     title: "Gatitos con musica suave",
     videoLink: "https://www.youtube.com/embed/IYAomYee5Hk",
     imgLink: "https://img.youtube.com/vi/JTmbgLwRIvY/maxresdefault.jpg",
     category: "otros",
     description: "gatos con musica suave",
     securityCode: "1234"
   }
   ]) */
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }


  function handleShowVideoForm() {
    setShowVideoForm(true);
    setShowCategoryForm(false)
    setCategorySeleccionRequired(true);
  };
  function handleShowCategoryForm() {
    setShowCategoryForm(true);
    setShowVideoForm(false);
    setCategorySeleccionRequired(false);
  };

  const categoryRegistration = (newCategory) => {
    console.log(newCategory.id);
    categoriesServices.searchCategory(newCategory.id)
      .then((data) => {
        console.log(data);
        if (data !== null && data !== undefined && data.length !== 0) {
          categoriesServices.editCategory(newCategory.id, newCategory.title, newCategory.description, newCategory.color, newCategory.securityCode)
            .then(() => {
              const categoryIndex = categories.findIndex((category) => category.id === newCategory.id);
              if (categoryIndex !== -1) {
                const updatedCategories = [...categories];
                updatedCategories[categoryIndex] = newCategory;
                setCategories(updatedCategories);
                console.log("Edición de categoría exitosa");
              }
            })
            .catch((error) => {
              console.error("Ocurrió un error durante la edición de la categoría", error);
            });
        } else {
          categoriesServices.addCategory(newCategory.id, newCategory.title, newCategory.description, newCategory.color, newCategory.securityCode)
            .then(() => {
              setOpen(true);
            })
            .catch((error) => {
              console.error("Ocurrió un error al agregar la categoría", error);
            });
        }
      })
      .catch((error) => {
        console.error("Ocurrió un error al buscar la categoría", error);
      });
  };


  const videoRegistration = (newVideo) => {

    videoServices.addVideo(
      newVideo.title,
      newVideo.videoLink,
      newVideo.imgLink,
      newVideo.category,
      newVideo.description,
      newVideo.securityCode
    )
      .then((response) => {
        setOpen(true)
        console.log(videoServices.videosList)

      })
      .catch((error) => {
        console.error("ha ocurrido un error", error)
      });
  }

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      <VideoContext.Provider value={videoServices.videosList}>
        <Header handleShowVideoForm={handleShowVideoForm} />
        <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }} message="Guardado exitosamente" />

        </Snackbar>
        {showVideoForm && (
          <VideoForm
            handleShowCategoryForm={handleShowCategoryForm}
            videoRegistration={videoRegistration}
            isCategorySeleccionRequired={isCategorySeleccionRequired}

          />
        )}
        {showCategoryForm && (
          <CategoryForm

            categoryRegistration={categoryRegistration}
            handleShowCategoryForm={handleShowCategoryForm}
            isCategorySeleccionRequired={isCategorySeleccionRequired}
          />
        )}
        {/*   {!showCategoryForm && !showVideoForm && (<Home />)} */}
        <Footer />
      </VideoContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
