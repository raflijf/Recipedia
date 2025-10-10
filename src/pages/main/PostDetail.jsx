import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router-dom"

import NotFound from "../../components/post/NotFound"
import DetailPostLayout from "../../layout/DetailPostLayout"
import DetailPostSkeleton from "../../components/loading/DetailPostSkeleton"

export default function PostDetail() {
    const {slug} = useParams()

    const fetchRecipe = async (slug) => { 
        try {
            const res = await axios.get(`https://dummyjson.com/recipes/${slug}?delay=800`)
            return res.data
        } catch (err ) {
            console.log(err) 
        }
    }    

    const {data, isLoading, isError, error} = useQuery({
        queryKey : ['post', slug], 
        queryFn : () => fetchRecipe(slug),
        retry : false
    })

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