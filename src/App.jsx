import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/main/Home"
import Recipes from "./pages/main/Recipes"
import Favorite from "./pages/main/Favorite"
import NotFound from "./pages/error/404"
import PostDetail from "./pages/main/PostDetail"

import { SearchProvider } from "./context/SearchContext"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout/>} >
              <Route path="/" element={<Home/>} />
              <Route path="/recipes" element={<Recipes/>} />
              <Route path="/favorite" element={<Favorite/>} />
              <Route path="/recipe/:slug" element={<PostDetail/>} />
            </Route>
          <Route path="*" element={<NotFound/>}  />
          </Routes>
        </Router>
      </SearchProvider>
    </QueryClientProvider>
  )
}

export default App
