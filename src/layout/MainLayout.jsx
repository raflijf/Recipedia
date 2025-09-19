import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function MainLayout() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Navbar/>
            <div className="grid  grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] ">
                <div className=" col-start-2 ">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}