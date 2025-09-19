import { Helmet } from "react-helmet";
import { useEffect, useRef } from "react";

import { useInfiniteQuery } from "@tanstack/react-query";

import axios from "axios";

import SearchBar from "../../components/forms/SearchBar";
import PrimaryButton from "../../components/button/PrimaryButton";
import PostCard from "../../components/post/PostCard";
import PostCardSkeleton from "../../components/loading/PostCardSkeleton";
import DostLoader from "../../components/loading/dots/DotsLoader";

import logo from '../../assets/Recipedia.png'

export default function Home() {

    const fetchData = async (page) => {
        const res = await axios.get(`https://dummyjson.com/recipes?limit=10&skip=${page}`)
        return res.data
    }

    const {data, fetchNextPage, isLoading, isFetchingNextPage} = useInfiniteQuery({
        queryKey : ['post'],
        queryFn : ({pageParam}) => fetchData(pageParam),
        initialPageParam : 0, 
        getNextPageParam : (lastPage) => {
            if (lastPage.skip + lastPage.limit < lastPage.total) {
                return lastPage.skip + lastPage.limit;
            }
            return undefined
        },
    }) 

    const observerRef = useRef(null)
    useEffect(() => {
       const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
            fetchNextPage()
        }
       }, {rootMargin : '350px'})

       if (observerRef.current) {
           observer.observe(observerRef.current)
       }
       return () => { if (observerRef.current)  observer.unobserve(observerRef.current)}

    }, [])

    window.addEventListener('unload', () => {
        window.scrollTo({top : 0, behavior : 'instant'})
    })

    return (
        <>
            <Helmet>
                <title>Beranda</title>
            </Helmet>
            <div className=" grid grid-rows-[0fr_1fr] gap-y-10">
                <div className="grid-rows-[1fr_1fr_0fr] grid place-items-center ">
                    <img src={logo} alt="" className="w-75"/>         
                    <SearchBar/>
                    <PrimaryButton>Buat resep anda sendiri</PrimaryButton>                
                </div>
                <div  className="grid  place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-14 ">
                {isLoading ? 
                        <>
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                        <PostCardSkeleton/>               
                    </>
                    :                    
                    data?.pages.map(page => (
                        page.recipes.map((post, idx) =>  (
                        <PostCard 
                            title={post.name}
                            id={post.id}
                            img={post.image}
                            difficulty={post.difficulty}
                            times={post.cookTimeMinutes}
                            key={idx}
                            />
                        ))
                    ))
                }

                </div>
                <div  ref={observerRef} ></div>
                {isFetchingNextPage && 
                    <div className="flex justify-center">
                        <DostLoader/>
                    </div>
                }
            </div>
        </>
    )
}