import "./App.scss"
import { Routes, Route } from "react-router-dom"
import SharedLayout from "./components/SharedLayout/SharedLayout"
import Home from "./components/Home/Home"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
