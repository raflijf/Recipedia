import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useContext } from "react";

import axios from "axios";

import { CacheContext } from "../context/CacheContext";

import SearchBar from "../components/forms/SearchBar";
import PrimaryButton from "../components/button/PrimaryButton";
import PostCard from "../components/post/PostCard";
import PostCardSkeleton from "../components/loading/PostCardSkeleton";

import logo from '../assets/Recipedia.png'

export default function Home() {
    
    const {dataPost, setDataPost} = useContext(CacheContext)
    const [isAddDataPost, setIsAddDataPost] = useState(false)
    const [skipData, setSkipData] = useState(0)
    useEffect(() => {
        const fetchDataPost = async () => {
            const res = await axios.get(`https://dummyjson.com/recipes?limit=10&skip=${skipData}`)
            setTimeout(() => {
                setDataPost({
                    data : [...dataPost.data, ...res.data.recipes],
                    total : res.data.total
                })
            }, 800)
        }
       if (skipData < dataPost.total && dataPost.data.length || !(dataPost.data.length)) {
            fetchDataPost()
        }
    }, [skipData])
    
    useEffect(() => {   
        const handleScroll = () => {
            const endScroll = window.innerHeight + window.scrollY
            const relativeScrollHeight = document.body.scrollHeight * 0.75
            setIsAddDataPost(endScroll >= relativeScrollHeight)
       }
       window.addEventListener('scroll' , handleScroll)

       return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        if (isAddDataPost) {
            setSkipData(prev  => prev + 10)
        }
    }, [isAddDataPost])

    return (
        <>
            <Helmet>
                <title>Beranda</title>
            </Helmet>
            <div className="grid  grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)]  ">
                <div className="  col-start-2 grid grid-rows-[0fr_1fr] gap-y-10">
                    <div className="grid-rows-[1fr_1fr_0fr] grid place-items-center ">
                        <img src={logo} alt="" className="w-75"/>         
                        <SearchBar/>
                        <PrimaryButton>Buat resep anda sendiri</PrimaryButton>                
                    </div>
                    <div  className="grid  place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-14 ">
                    {!(dataPost.data.length) ? 
                        <>
                            <PostCardSkeleton/>               
                            <PostCardSkeleton/>               
                            <PostCardSkeleton/>               
                            <PostCardSkeleton/>               
                            <PostCardSkeleton/>               
                            <PostCardSkeleton/>               
                        </>
                        :
                        dataPost.data.map((item, idx) => (
                            <PostCard 
                            title={item.name}
                            img={item.image}
                            difficulty={item.difficulty}
                            times={item.cookTimeMinutes}
                            key={idx}
                            />
                        ))         
                    }
                   
                    </div>
                </div>
            </div>
        </>
    )
}