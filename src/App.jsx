import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/main/Home"
import Recipes from "./pages/main/Recipes"
import Favorite from "./pages/main/Favorite"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NotFound from "./pages/error/404"
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route element={<MainLayout/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/recipe" element={<Recipes/>} />
              <Route path="favorite" element={<Favorite/>} />
            </Route>
          <Route path="*" element={<NotFound/>}  />
          </Routes>
        </Router>
    </QueryClientProvider>
  )
}

export default App
