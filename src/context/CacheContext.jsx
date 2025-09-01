import { createContext } from "react";
import { useState } from "react";

const CacheContext = createContext([])

function CacheProvider({children}) {
    const [dataPost, setDataPost] = useState([])
    return (
        <CacheContext.Provider value={{dataPost, setDataPost}}>
            {children}
        </CacheContext.Provider>
    )
}

export {CacheContext, CacheProvider}