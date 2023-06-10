
import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import CategoryForm from "./Components/Registration/CategoryForm/CategoryForm";
import VideoForm from "./Components/Registration/VideoForm/VideoForm";
export const CategoryContext = createContext()
export const VideoContext = createContext()


function App() {

  const [showVideoForm, setShowVideoForm] = useState(false);
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [isCategorySeleccionRequired, setCategorySeleccionRequired] = useState(true);
  const [categories, setCategories] = useState([
    {
      id: 23423442243,
      title: "otros",
      description: "El mundo de lo inesperado. Una mezcla de criaturas diferentes y encantadoras que desafían las categorías tradicionales.",
      color: "#52F438",
      securityCode: "12345"
    },
    {
      id: 9798969676,
      title: "gatos",
      description: "La realeza felina. Seres misteriosos y adorables con el poder de hacerte sentir inferior y amarlos incondicionalmente. ¡Prepárate para ser su súbdito y recibir la dosis diaria de ronroneos y miradas despectivas!",
      color: "#57C278",
      securityCode: "12345"
    },
    {
      id: 678668768686,
      title: "perros",
      description: "Los eternos optimistas peludos. Siempre listos para una aventura, un juego o un abrazo. ¡Son los maestros de la cola en constante movimiento y la cara de '¿me llevarás contigo?' que te derrite el corazón!",
      color: "#97D278",
      securityCode: "543699"
    },

  ]);
  const [videos, setVideos] = useState([{
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
  ])


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
    const existingIndex = categories.findIndex((category) => category.id === newCategory.id);
    console.log("App-categoryRegistration-newCategory.id", newCategory.id)
    if (existingIndex === -1) {
      console.log("No existe", categories)
      setCategories([...categories, newCategory])
    } else {
      console.log("Existe", categories)
      const updatedCategories = [...categories];
      const categoryIndexToUpdate = updatedCategories.findIndex((category) => category.id === newCategory.id);
      if (categoryIndexToUpdate !== -1) {
        updatedCategories[categoryIndexToUpdate] = newCategory;
        setCategories(updatedCategories);
      }
    }

  }
  const videoRegistration = (newVideo) => {
    console.log(newVideo)
    setVideos([...videos, { ...newVideo }])
  }

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      <VideoContext.Provider value={{ videos, setVideos }}>
        <Header handleShowVideoForm={handleShowVideoForm} />
        {showVideoForm && (
          <VideoForm
            handleShowCategoryForm={handleShowCategoryForm}
            videoRegistration={videoRegistration}
            isCategorySeleccionRequired={isCategorySeleccionRequired}
          />
        )}
        {showCategoryForm && (
          <CategoryForm
            categories={categories.map((category) => category.title)}
            categoryRegistration={categoryRegistration}
            handleShowCategoryForm={handleShowCategoryForm}
            isCategorySeleccionRequired={isCategorySeleccionRequired}
          />
        )}
        {/* {!showCategoryForm && !showVideoForm && (<Home />)} */}
        <Footer />
      </VideoContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;
