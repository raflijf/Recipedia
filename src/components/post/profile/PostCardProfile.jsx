import { useNavigate } from "react-router-dom"
import { HeartIcon } from "@heroicons/react/24/outline"

export default function PostCardProfile({data}) {
    const navigate = useNavigate()
    return (
        <div className="flex w-full gap-3 h-24 lg:h-36 " >
            <img  onClick={() => navigate(`/recipe/${data?.id}`) } src={data?.image} alt="" className="lg:w-55  cursor-pointer   w-30 aspect-[16/9] object-cover  rounded"/>
            <div className="grid grid-rows-[1fr_auto] w-full">
                <div onClick={() => navigate(`/recipe/${data?.id}`)} className="cursor-pointer">
                    <p className="text-xs text-text/55 ">1 bulan yang lalu</p>
                    <h2 className="lg:text-xl text-balance  md:text-lg text-md  font-semibold  lg:line-clamp-3 line-clamp-2">{data?.name}</h2>
                </div>
                <div className="grid grid-cols-2 items-center gap-5 md:gap-7 [&>span]:font-semibold [&>span]:text-sm [&>span]:md:text-md   w-30   ">
                    <HeartIcon className="size-7 text-accent  "/>
                    <span className="text-secondry ">{data?.difficulty}</span>
                </div>
            </div>
        </div>
    )
}