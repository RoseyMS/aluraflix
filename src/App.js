import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { videoServices } from "./Service/video-service";
import { categoriesServices } from "./Service/categories-service";
import React, { createContext, useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import CategoryForm from "./Components/Registration/CategoryForm/CategoryForm";
import VideoForm from "./Components/Registration/VideoForm/VideoForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
export const CategoryContext = createContext();
export const VideoContext = createContext();
/* NOTES: 
"El mundo de lo inesperado. Una mezcla de criaturas diferentes y encantadoras que desafían las categorías tradicionales.",
"La realeza felina. Seres misteriosos y adorables con el poder de hacerte sentir inferior y amarlos incondicionalmente. ¡Prepárate para ser su súbdito y recibir la dosis diaria de ronroneos y miradas despectivas!"
"Los eternos optimistas peludos. Siempre listos para una aventura, un juego o un abrazo. ¡Son los maestros de la cola en constante movimiento y la cara de '¿me llevarás contigo?' que te derrite el corazón!"  
"Los maestros de la relajación extrema en el reino animal. Con su apariencia adorable y su amor por la siesta, los pandas son expertos en el arte de tomarse la vida con calma. Dejarse llevar por su ritmo relajado y su afición por el bambú mientras te contagian con su ternura y torpeza es inevitable."
 */
const Alert = React.forwardRef(function Alert(props, ref) {
  const { message, ...otherProps } = props;
  return (
    <MuiAlert elevation={6} ref={ref} {...otherProps}>
      {message}
    </MuiAlert>
  );
});
function App() {
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [isCategorySeleccionRequired, setCategorySeleccionRequired] =
    useState(true);
  const [categories, setCategories] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchVideos = () => {
    videoServices
      .videosList()
      .then((data) => {
        setVideos(data);
      })
      .catch((error) => {
        console.error("Error al obtener los videos", error);
      });
  };

  useEffect(() => {
    categoriesServices
      .categoriesList()
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error("Error al obtener las categorías", error);
      });

    fetchVideos();
  }, []);
  const [open, setOpen] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  function handleShowVideoForm() {
    setShowVideoForm(true);
    setShowCategoryForm(false);
    setCategorySeleccionRequired(true);
  }
  function handleShowCategoryForm() {
    setShowCategoryForm(true);
    setShowVideoForm(false);
    setCategorySeleccionRequired(false);
  }
  const categoryRegistration = (newCategory) => {
    console.log(newCategory.id);
    categoriesServices
      .searchCategory(newCategory.id)
      .then((data) => {
        console.log(newCategory.id);
        if (data !== null && data !== undefined && data.length !== 0) {
          categoriesServices
            .editCategory(
              newCategory.id,
              newCategory.title,
              newCategory.description,
              newCategory.color,
              newCategory.securityCode
            )
            .then(() => {
              const categoryIndex = categories.findIndex(
                (category) => category.id === newCategory.id
              );
              if (categoryIndex !== -1) {
                const updatedCategories = [...categories];
                updatedCategories[categoryIndex] = newCategory;
                setCategories(updatedCategories);
                console.log("Edición de categoría exitosa");
              }
            })
            .catch((error) => {
              console.error(
                "Ocurrió un error durante la edición de la categoría",
                error
              );
            });
        } else {
          categoriesServices
            .addCategory(
              newCategory.id,
              newCategory.title,
              newCategory.description,
              newCategory.color,
              newCategory.securityCode
            )
            .then(() => {
              setOpen(true);
              setCategories([...categories, newCategory]);
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
    console.log(newVideo.category);
    videoServices
      .addVideo(
        newVideo.title,
        newVideo.videoLink,
        newVideo.imgLink,
        newVideo.category,
        newVideo.description,
        newVideo.securityCode
      )
      .then((response) => {
        setOpen(true);
        console.log(videoServices.videosList);
      })
      .catch((error) => {
        console.error("ha ocurrido un error", error);
      });
  };

  return (
    <BrowserRouter>
      <CategoryContext.Provider value={{ categories, setCategories }}>
        <VideoContext.Provider value={{ videos }}>
          <Header handleShowVideoForm={handleShowVideoForm} />
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={6000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
              message="Guardado exitosamente"
            />
          </Snackbar>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home fetchVideos={fetchVideos} />}
            />
            <Route
              path="/category-form"
              element={
                <CategoryForm
                  categoryRegistration={categoryRegistration}
                  handleShowCategoryForm={handleShowCategoryForm}
                  isCategorySeleccionRequired={isCategorySeleccionRequired}
                />
              }
            />
            <Route
              path="/video-form"
              element={
                <VideoForm
                  handleShowCategoryForm={handleShowCategoryForm}
                  videoRegistration={videoRegistration}
                  isCategorySeleccionRequired={isCategorySeleccionRequired}
                />
              }
            />
          </Routes>
          <Footer />
        </VideoContext.Provider>
      </CategoryContext.Provider>
    </BrowserRouter>
  );
}

export default App;
