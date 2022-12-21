import Navbar from "./Components/Nav";
import Pricing from "./Components/Pricing";
import Home from "./Components/Home";
import About from "./Components/About";
import Login from "./Components/Login";
import { Route, Routes } from "react-router-dom"

function App() {
  const name = "Luxshana";
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home name={name} />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  )
}

export default App