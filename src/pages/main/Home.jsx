import { useNavigate, Link } from "react-router-dom";
import { useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";

import { useInfiniteQuery } from "@tanstack/react-query";

import { SearchContext } from "../../context/SearchContext";

import axios from "axios";

import SearchForm from "../../components/forms/SearchForm";
import PrimaryButton from "../../components/button/PrimaryButton";
import PostCard from "../../components/post/PostCard";
import PostCardSkeleton from "../../components/loading/PostCardSkeleton";
import DostLoader from "../../components/loading/dots/DotsLoader";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import logo from '../../assets/Recipedia.png'

export default function Home() {
    const navigate = useNavigate()

    const fetchData = async (page) => {
        const res = await axios.get(`https://dummyjson.com/recipes?limit=12&skip=${page}`)
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

    const {searchResult, handleSearch, searchValue} = useContext(SearchContext)
    const listSearchRef = useRef([])
    const searchInputRef = useRef(null)
    const [openListSearch, setOpenListSearch] = useState()
    const [idxList, setIdxList] = useState(-1)
    
    useEffect(() => {
        setIdxList(-1)
        listSearchRef.current = []
    }, [searchValue])

    useEffect(() => {
        setOpenListSearch(true)
        const handleCloseListSearch = (e) => {
            if (listSearchRef.current.length) {
                if (e.target.closest('.search-input')) return
                setOpenListSearch(false)
            } 
        }

        window.addEventListener('click', handleCloseListSearch) 

        return () => window.removeEventListener('click', handleCloseListSearch)
    }, [searchValue])

    useEffect(() => {
        const keyEvent = (e) => {
            const listSearch = listSearchRef.current
            if (listSearch.length > 0) {

                if (e.key === 'ArrowDown' && idxList < listSearch.length - 1  ) {
                    e.preventDefault()
                    searchInputRef.current.blur()
                    setIdxList(prev => {
                        const newIdx = prev + 1 
                        if (prev >= 0) {
                            listSearch[prev].target.classList.remove('bg-gray-300/40')
                        }
                        listSearch[newIdx].target.classList.add('bg-gray-300/40')
                        return newIdx
                    })
                } else if (e.key === 'ArrowUp' &&  idxList > 0 ) {
                    e.preventDefault()
                    searchInputRef.current.blur()
                    setIdxList(prev => {
                        let newIdx = prev
                        newIdx -=  1
                        listSearch[newIdx].target.classList.add('bg-gray-300/40')
                        listSearch[prev].target.classList.remove('bg-gray-300/40')
                        return newIdx
                    })
                } else if (e.key === 'Enter') {
                    e.preventDefault()
                    navigate(`/recipe/${listSearch[idxList].slug}`)
                } 
            }
        }
        window.addEventListener('keydown',keyEvent)
        return () => window.removeEventListener('keydown',keyEvent)
    }, [idxList])

    return (
        <>
            <Helmet>
                <title>Beranda</title>
            </Helmet>
            <div className=" grid grid-rows-[0fr_1fr] gap-y-10">
                <div className="grid-rows-[1fr_1fr_0fr] grid place-items-center ">
                    <img src={logo} alt="" className="w-75"/>         
                    {window.innerWidth >= 1024 &&
                        <>
                            <SearchForm
                                handleSearch={handleSearch}  
                                ref={searchInputRef}
                            />
                            {searchResult.length > 0 && openListSearch && 
                                <div  className=" relative w-[90%]  md:w-[85%] lg:w-[60%] bg-accent flex justify-center">
                                    <div className="absolute bg-light w-full rounded-lg z-10 -top-4  border border-gray-300/90 overflow-y-auto  max-h-96 h-auto [&::-webkit-scrollbar]:hidden">
                                        {searchResult?.map((itm, idx) => (
                                            <button 
                                                ref={(el) => {
                                                    listSearchRef.current[idx] = {
                                                        target : el,
                                                        slug : itm.id
                                                    }   
                                                }}   
                                                key={idx} 
                                                className="flex gap-3 items-center text-lg hover:bg-gray-300/40  p-1.5 w-full cursor-pointer "
                                                onClick={() => navigate(`/recipe/${itm.id}`)}
                                            >
                                                <MagnifyingGlassIcon className="size-5"/>
                                                <p>{itm.name}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            }
                        </>
                    }
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