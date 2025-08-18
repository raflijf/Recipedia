import SearchBar from "../components/forms/SearchBar";
import PrimaryButton from "../components/button/PrimaryButton";
import PostCard from "../components/post/PostCard";

import logo from '../assets/Recipedia.png'
import PostCardSkeleton from "../components/loading/PostCardSkeleton";

export default function Home() {
   
    return (
        <div className="grid  grid-cols-[1fr_10fr_1fr] md:grid-cols-[minmax(0,1fr)_minmax(0,8fr)_minmax(0,1fr)]  ">
            <div className="  col-start-2 grid grid-rows-[0fr_1fr] gap-y-10">
                <div className="grid-rows-[1fr_1fr_0fr] grid place-items-center ">
                    <img src={logo} alt="" className="w-75"/>         
                    <SearchBar/>
                    <PrimaryButton>Buat resep anda sendiri</PrimaryButton>                
                </div>
                <div className="grid  place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 gap-y-14 md">
                   <PostCard/>
                   <PostCard/>
                   <PostCard/>
                    
                </div>
               
            </div>
        </div>
    )
}