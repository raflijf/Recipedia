import PrimaryButton from "../components/button/PrimaryButton"
import Like from '../components/icon/Like'

import { 
    ClockIcon, 
    FireIcon, 
    ChevronDownIcon, 
    ChevronUpIcon,
    UserIcon,
    ArrowRightIcon,
    HeartIcon, 
} from "@heroicons/react/24/outline"


import seram from "../assets/billGates.jpeg"
import { useState } from "react"
import clsx from "clsx"

export default function DetailPostLayout({data}) {
    
    const [moreDesc, setMoreDesc] = useState(false)

    return ( 
        <div className="grid lg:grid-cols-2 gap-3 max-w-6xl mx-auto   ">
            <div className="  flex justify-center w-full ">
                <img 
                    src={data?.image} 
                    alt="picok" 
                    className="rounded-lg  w-full  md:h-80 2xl:h-100  aspect-[10/6] lg:aspect-[16/9] object-cover "
                />
            </div>
            <div className="grid-rows-[1fr_auto]  grid gap-5 ">
                <div>
                    <h1 className="text-3xl  text-text font-bold">{data?.name}</h1>
                    <div className="flex gap-2 my-2.5">
                        <img 
                            src={seram} 
                            alt=""
                            className="rounded-full w-13 " 
                        />
                        <div>
                            <h2 className="font-semibold">Mama amri</h2>
                            <p className="text-sm">@amri_tzy</p>
                        </div>
                    </div>
                    <p className={clsx('text-sm', moreDesc ? 'line-clamp-none' : 'line-clamp-7' )}>
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, laudantium.
                    </p>
                    <span 
                        className="text-center flex justify-center cursor-pointer text-accent text-sm  items-center"
                        onClick={() => setMoreDesc(prev => !prev)}
                    >Lebih {moreDesc ? 
                        <>
                            sedikit 
                             <ChevronUpIcon className="size-5" />
                        </>
                        : 
                        <>
                            banyak
                            <ChevronDownIcon className="size-5" />
                        </>
                        } 
                    </span>
                </div>
                <div className="flex  items-center  gap-8 " >
                    <HeartIcon className=" size-10 text-accent" />
                    <div className="flex items-centerw ">
                        <FireIcon className="size-9 text-primary" />
                        <h2 className=" text-2xl lg:text-3xl font-bold text-primary">{data?.difficulty}</h2>
                    </div>
                </div>
            </div>
            <div>
                <div className="mb-4">
                    <h2 className="font-semibold text-3xl text-text ">Komposisi</h2>
                    <div className="flex gap-3 items-center opacity-70  mt-1.5">
                        <UserIcon className="size-6"/>
                        <span className="text-lg">{data?.servings} orang</span>
                    </div>
                </div>
                <ul className="list-disc ml-1 p-0 list-inside marker:text-secondry flex flex-col gap-2"> 
                    {data?.ingredients.map((itm, idx) => (
                        <li key={idx}>{itm}</li>
                    ))}
                </ul>
            </div>
            <div className=" ">
                <div className=" mb-4" >
                    <h2 className="font-semibold text-3xl text-text" >Langkah - langkah</h2>
                    <div className="flex items-center gap-3 opacity-70 mt-1.5">
                        <ClockIcon  className="size-6 text-text" />
                        <h2 className="text-xl ">{data?.cookTimeMinutes} Menit</h2>
                    </div>
                </div>
                <ol className="space-y-4">
                    {data?.instructions.map((itm, idx) => (
                        <li className="flex gap-3" key={idx}>
                            <div className="bg-secondry rounded-full w-9 h-9 grid place-items-center text-white font-medium text-lg">{idx + 1}</div>
                            <div className="bg-secondry/15 w-full flex items-center px-2 rounded ">
                                {itm}
                            </div>
                        </li>                        
                    ))}
                </ol>
            </div>
        </div>
    )
}






