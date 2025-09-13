import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route element={<MainLayout/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/recipe" element={<Recipes/>} />
            </Route>
          </Routes>
        </Router>
    </QueryClientProvider>
  )
}

export default App
