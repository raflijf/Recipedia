import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function MainLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Navbar/>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}