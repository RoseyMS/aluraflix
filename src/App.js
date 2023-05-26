import React, { createContext, useState, useContext } from "react";
import Header from "./Components/Header/Header";
import CategoryLog from "./Components/Registration/CategoryLog/CategoryLog";
import Footer from "./Components/Footer/Footer"
const CategoryContext = createContext();

function App() {
  const [categories, setCategories] = useState([
    {
      title: "Divertidos",
      color: "#57C278",
      securityCode: "12345"
    },
    {
      title: "Tiernos",
      color: "#97D278",
      securityCode: "543699"
    },
    {
      title: "Populares",
      color: "#52F438",
      securityCode: "12345"
    }
  ]);

  return (

    <CategoryContext.Provider value={{ categories }}>
      <Header />
      <CategoryLog />
      <Footer />
    </CategoryContext.Provider>
  );
}

export default App;
