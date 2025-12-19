import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import MainLayout from "./layout/MainLayout"
import Home from "./pages/main/Home"
import Recipes from "./pages/main/Recipes"
import Favorite from "./pages/main/Favorite"
import NotFound from "./pages/error/404"
import PostDetail from "./pages/main/PostDetail"
import Create from "./pages/main/Create"
import Playground from "./pages/Playground"

// account 
import Profile from "./pages/account/Profile"
import Login from "./pages/account/auth/login"

import { SearchProvider } from "./context/SearchContext"
import { ToastProvider } from "./context/ToastProvider"
import Onboarding from "./pages/onboarding/Onboarding"
import Intro from "./pages/onboarding/Intro"
import Name from "./pages/onboarding/Name"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider>
        <SearchProvider>
          <Router>
            <Routes>
              {/* Main */}
              <Route element={<MainLayout/>} >
                <Route path="/" element={<Home/>} />
                <Route path="/recipes" element={<Recipes/>} />
                <Route path="/favorite" element={<Favorite/>} />
                <Route path="/recipe/:slug" element={<PostDetail/>} />
                <Route path="/recipe/create" element={<Create/>} />
                <Route path="/profile/:uid" element={<Profile/>} />
              </Route>
            
              {/* Auth/account */}
              <Route path="/login" element={<Login/>} />

              {/* Onboarding */}
              <Route element={<Onboarding/>}>
                  <Route path="/start/" element={<Name/>} />
                  <Route path="/start/intro/" element={<Intro/>} />
              </Route>

              <Route path="/playground" element={<Playground/>}  />
              <Route path="*" element={<NotFound/>}  />
            </Routes>
          </Router>
        </SearchProvider>
      </ToastProvider>
    </QueryClientProvider>
  )
}

export default App
