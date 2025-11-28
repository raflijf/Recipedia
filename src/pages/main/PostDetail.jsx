import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"

import ErrorPage from "../error/ErrorPage"
import DetailPostLayout from "../../layout/DetailPostLayout"
import DetailPostSkeleton from "../../components/loading/DetailPostSkeleton"

export default function PostDetail() {
    const {slug} = useParams()

    const fetchRecipe = async (slug) => { 
        const res = await axios.get(`https://dummyjson.com/recipes/${slug}?delay=800`)
        return res.data
    }    

    const {data, isLoading, isError, error, status} = useQuery({
        queryKey : ['post', slug], 
        queryFn : () => fetchRecipe(slug),
        retry : false
    })
    console.log(error)
    window.scrollTo({top : 0, behavior : 'instant'})

    return (
        <div className=" my-5 ">
           {isLoading ? 
                <DetailPostSkeleton/>
                :
                isError ? 
                    <ErrorPage statusCode={error?.status} />
                    :
                    <DetailPostLayout data={data}/>
            }
        </div>
    )
}