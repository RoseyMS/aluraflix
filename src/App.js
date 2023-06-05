import React, { createContext, useState } from "react";
import Header from "./Components/Header/Header";
import CategoryLog from "./Components/Registration/CategoryLog/CategoryLog";
import Footer from "./Components/Footer/Footer"
import VideoLog from "./Components/Registration/VideoLog/VideoLog";
import Home from "./Components/Home/Home"

export const CategoryContext = createContext()
export const VideoContext = createContext()

function App() {
  const [showCategoryLog, setShowCategoryLog] = useState(false);
  const [showVideoLog, setShowVideoLog] = useState(false);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "gatos",
      color: "#57C278",
      securityCode: "12345"
    },
    {
      id: 2,
      title: "perros",
      color: "#97D278",
      securityCode: "543699"
    },
    {
      id: 3,
      title: "otros",
      color: "#52F438",
      securityCode: "12345"
    },
    {
      id: 4,
      title: "varios",
      color: "#52F438",
      securityCode: "12345"
    }
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
  },
  {
    id: 4,
    title: "Gatitos con musica suave",
    videoLink: "https://www.youtube.com/embed/IYAomYee5Hk",
    imgLink: "https://img.youtube.com/vi/JTmbgLwRIvY/maxresdefault.jpg",
    category: "gatos",
    description: "gatos con musica suave",
    securityCode: "1234"
  },
  {
    id: 5,
    title: "Gatitos con musica suave",
    videoLink: "https://www.youtube.com/embed/IYAomYee5Hk",
    imgLink: "https://img.youtube.com/vi/JTmbgLwRIvY/maxresdefault.jpg",
    category: "gatos",
    description: "gatos con musica suave",
    securityCode: "1234"
  },
    ,
  {
    id: 6,
    title: "Gatitos con musica suave",
    videoLink: "https://www.youtube.com/embed/IYAomYee5Hk",
    imgLink: "https://img.youtube.com/vi/JTmbgLwRIvY/maxresdefault.jpg",
    category: "gatos",
    description: "gatos con musica suave",
    securityCode: "1234"
  }
  ])

  function handleShowCategoryLog() {
    setShowCategoryLog(!showCategoryLog);
    setShowVideoLog(false)
  };
  function handleShowVideoLog() {
    setShowVideoLog(!showVideoLog);
    setShowCategoryLog(!showCategoryLog);
  };

  const categoryRegistration = (category) => {
    console.log("Nueva categoria", category)
    setCategories([...categories, category])
    //crearEquipo={crearEquipo}
  }
  const videoRegistration = (newVideo) => {
    console.log(newVideo)
    setVideos([...videos, { ...newVideo }])
  }
  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      <VideoContext.Provider value={{ videos, setVideos }}>
        <Header handleShowCategoryLog={handleShowCategoryLog} />
        {showCategoryLog && (
          <CategoryLog
            handleShowVideoLog={handleShowVideoLog}
            videoRegistration={videoRegistration}
          />
        )}
        {showVideoLog && (
          <VideoLog
            categories={categories.map((category) => category.title)}
            categoryRegistration={categoryRegistration}
          />
        )}
        {/*  <Home /> */}
        <Footer />
      </VideoContext.Provider>
    </CategoryContext.Provider>
  );
}

export default App;