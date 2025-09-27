import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"

import NotFound from "../../components/post/NotFound"
import DetailPostLayout from "../../layout/DetailPostLayout"
import DetailPostSkeleton from "../../components/loading/DetailPostSkeleton"

export default function PostDetail() {
    const {slug} = useParams()

    const fetchRecipe = async (slug) => {
        const start = performance.now()
        const res = await axios.get(`https://dummyjson.com/recipes/${slug}`)
        const end = performance.now()

        console.log(start, end, end - start)
        return res.data
    }    

    const {data, isLoading, isError, error} = useQuery({
        queryKey : ['post', slug], 
        queryFn : () => fetchRecipe(slug),
        retry : false

    })
    console.log(isError)
    console.log(error?.status)

    window.scrollTo({top : 0, behavior : 'instant'})

    return (
        <div className=" my-5 ">
           {isLoading ? 
                <DetailPostSkeleton/>
                :
                isError && error?.status === 404 ? 
                <NotFound/>
                :
                <DetailPostLayout data={data}/>
            }
           
        </div>
    )
}