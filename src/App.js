import React, { createContext, useState, useContext } from "react";
import Header from "./Components/Header/Header";
import CategoryLog from "./Components/Registration/CategoryLog/CategoryLog";
import Footer from "./Components/Footer/Footer"
import VideoLog from "./Components/Registration/VideoLog/VideoLog";

export const CategoryContext = createContext(

);

function App() {
  const [showCategoryLog, setShowCategoryLog] = useState(false);
  const [showVideoLog, setShowVideoLog] = useState(false);
  const [categories, setCategories] = useState([
    {
      id: 1,
      title: "Gatos",
      color: "#57C278",
      securityCode: "12345"
    },
    {
      id: 2,
      title: "Perros",
      color: "#97D278",
      securityCode: "543699"
    },
    {
      id: 3,
      title: "Otros",
      color: "#52F438",
      securityCode: "12345"
    }
  ]);

  function handleShowCategoryLog() {
    setShowCategoryLog(!showCategoryLog);
    setShowVideoLog(false)
  };
  function handleShowVideoLog() {
    setShowVideoLog(!showVideoLog);
    setShowCategoryLog(!showCategoryLog);
  };

  return (
    <CategoryContext.Provider value={{ categories, setCategories }}>
      <Header handleShowCategoryLog={handleShowCategoryLog} />
      {showCategoryLog && <CategoryLog handleShowVideoLog={handleShowVideoLog} />}
      {showVideoLog && <VideoLog />}
      <Footer />
    </CategoryContext.Provider>
  );
}

export default App;
