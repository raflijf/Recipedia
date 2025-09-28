import { useState } from "react"

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline"

export default function SearchBar() {
    const [value, setValue] = useState('')
    

    return (
        <div className="flex  items-center gap-2 rounded-full border-2 border-black/65 px-3   w-[90%]  md:w-[85%] lg:w-[60%]">
            <MagnifyingGlassIcon className="size-6"/>
            <input 
                type="text"  
                className=" h-9 w-full  focus:outline-none font-light" 
                placeholder="Cari resep"
                onChange={val => setValue(val.target.value)}
                value={value}
                enterKeyHint="search"
            />
            <div className="w-4">
                {value.length > 0 && 
                   <XMarkIcon className="size-5"/>
                }
            </div>
        </div>
    )
}