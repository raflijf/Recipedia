import { Outlet } from "react-router-dom"

import Navbar from "./Navbar"
import Footer from "./Footer"
import { useContext } from "react"
import { SearchContext } from "../context/SearchContext"
import SearchModal from "../components/modal/SearchModal"

export default function MainLayout() {
    const {openSearchModal} = useContext(SearchContext)
    return (
        <div className="grid grid-rows-[auto_1fr_auto] h-screen">
            <Navbar/>
            <div className="grid  grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)] ">
                <div className=" col-start-2 ">
                    <Outlet/>
                    {openSearchModal && <SearchModal/>}
                </div>
            </div>
            <Footer/>
        </div>
    )
}