import React from "react"
import ReactDOM from "react-dom/client"
import "./main.scss"
import Navbar from "./components/Navbar/Navbar.tsx"
import MainPage from "./components/MainPage/MainPage.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <MainPage />
  </React.StrictMode>
)
