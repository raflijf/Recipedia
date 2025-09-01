import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"

import { CacheProvider } from "./context/CacheContext"

function App() {
  return (
    <CacheProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout/>} >
            <Route path="/" element={<Home/>} />
            <Route path="/recipe" element={<Recipes/>} />
          </Route>
        </Routes>
      </Router>
    </CacheProvider>
  )
}

export default App
