import { Routes, Route } from "react-router-dom"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Navbar from "./components/Navigation/Navbar"
import Home from "./pages/Home"
import Dictionary from "./pages/Dictionary"
import EmailCheck from "./pages/EmailCheck"
import Administrative from "./pages/Administrative"
import "./App.css"

export default function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dizionario" element={<Dictionary />} />
          <Route path="/controllo-email" element={<EmailCheck />} />
          <Route path="/pratiche" element={<Administrative />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}