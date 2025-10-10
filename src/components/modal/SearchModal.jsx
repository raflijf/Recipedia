import { useContext, useEffect } from "react"

import SearchForm from "../forms/SearchForm"
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { SearchContext } from "../../context/SearchContext"
import { useNavigate } from "react-router-dom"

export default function SearchModal() {
    useEffect(() => {
        document.body.classList.add('overflow-hidden')
        return () => document.body.classList.remove('overflow-hidden')
    }, [])

    const navigate = useNavigate()
    const {handleSearch, searchResult, setOpenSearchModal} = useContext(SearchContext)

    const handleNavigate = (to) => {
        navigate(to)
        setOpenSearchModal(false)
    }

    return (
        <div className="fixed w-full h-full bg-black/40 z-30 inset-0 grid place-items-center"> 
            <div className="bg-light max-w-xl md:w-full w-[90%] flex flex-col gap-1 h-120 rounded ">
                <div className="flex items-center gap-2 p-2">
                    <SearchForm handleSearch={handleSearch}/>
                    <XMarkIcon className="size-6" onClick={() => setOpenSearchModal(false)}/>
                </div>
                <div className="flex flex-col  overflow-auto">
                    {searchResult.map((itm, idx) => (
                        <button 
                            className="flex  items-center gap-3 h-10 px-2 rounded active:bg-gray-300/40" 
                            onClick={() => handleNavigate(`/recipe/${itm.id}`)}
                            key={idx}
                        >
                            <MagnifyingGlassIcon className="size-4"/>
                            <h2 className="text-md line-clamp-1">{itm.name}</h2>
                        </button>
                    ))}
                </div>
            </div>
        </div>  
    )
}