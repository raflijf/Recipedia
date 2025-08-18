import { useState } from "react"

export default function SearchBar() {
    const [value, setValue] = useState('')
    

    return (
        <div className="flex  items-center gap-2 rounded-full border-2 border-black/65 px-3   w-[90%]  md:w-[85%] lg:w-[60%]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
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
                    <svg onClick={() => setValue('')}   cursor={'pointer'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                }
            </div>
        </div>
    )
}