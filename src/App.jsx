import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout/>} >
          <Route path="/" element={<Home/>} />
          <Route path="/recipe" element={<Recipes/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
