import { useContext, useEffect, useRef } from "react"

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"
import { SearchContext } from "../../context/SearchContext"

export default function SearchBar({handleSearch, ref}) {
    const {setSearch, setSearchValue, searchValue} = useContext(SearchContext)

    const inputRef = useRef()
    useEffect(() => {
        if (window.innerWidth < 1024 ) {
            inputRef.current.focus()
        }
    }, [])   


    return (
        <div ref={ref} className="search-input  flex  items-center gap-2 rounded-full border-2 border-black/65 px-1 lg:px-3   w-full   lg:w-[60%] ">
            <MagnifyingGlassIcon className="size-6"/>
            <input 
                ref={inputRef}
                type="text"  
                className=" h-6 lg:h-9 w-full  focus:outline-none font-light" 
                placeholder="Cari resep"
                onChange={handleSearch}
                value={searchValue}
                enterKeyHint="search"
            />
            <div className="w-4">
                {searchValue.length > 0 && 
                   <XMarkIcon className="size-4 lg:size-5" onClick={() => {
                    setSearchValue('')
                    setSearch('')
                }}/>
                }
            </div>
        </div>
    )
}


