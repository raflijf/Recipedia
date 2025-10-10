import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { createContext, useState } from "react";

export const  SearchContext = createContext()

export function SearchProvider({children}) {
    const [search, setSearch] = useState('')
    const [searchValue, setSearchValue] = useState('')
    const [typeTimerState, setTypeTimerState] = useState(null)
    
    const fetchData =  async (search) => {
        if (search) {
            const res = await axios.get(`https://dummyjson.com/recipes/search?q=${search}&select=name&limit=10`)
            return res.data.recipes
        }
    }

    const {
        data : searchResult = [],
        isLoading,
    } = useQuery({
        queryKey : ['search', search], 
        queryFn :  () => fetchData(search),
        enabled : true
    })

    const handleSearch = (e) => {
        const query = e.target.value 
        setSearchValue(query)
        clearTimeout(typeTimerState)
        const typingTimer = setTimeout(() => {
            setSearch(query)
        }, 500)
        setTypeTimerState(typingTimer)
    }

    const [openSearchModal, setOpenSearchModal] = useState(false)

    return (
        <SearchContext.Provider value={{searchResult, handleSearch, searchValue, setSearch,setSearchValue, isLoading, openSearchModal, setOpenSearchModal}} > 
            {children}
        </SearchContext.Provider>
    )
}