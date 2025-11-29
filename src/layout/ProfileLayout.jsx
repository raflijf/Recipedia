import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import PrimaryButton from "../components/button/PrimaryButton";
import BaseModal from "../components/modal/BaseModal";
import EditProfileModal from "../components/modal/profile/EditProfileModal";
import PostCardProfileSkeleton from "../components/loading/profile/PostCardProfileSkeleton";

import profil from '../assets/billGates.jpeg'
import PostCardProfile from "../components/post/profile/PostCardProfile";

import {
    ChevronDownIcon, 
    ChevronUpIcon,
    EnvelopeIcon,
    LinkIcon,
    XMarkIcon,
} from "@heroicons/react/24/outline"

import clsx from "clsx";

export default function ProfileLayout({userPostData, userPostDataLoading, userData}) {
    const [_, setSearchParams] = useSearchParams()
    const [showPhoto, setShowPhoto] = useState(false)
    const [moreDesc, setMoreDesc] = useState(false)

    console.log(userData)

    return (
        <>
            <div className="mt-5 lg:grid lg:grid-cols-[auto_1fr] gap-10 space-y-10">
                <div className=" lg:w-xs w-full">
                    <div>
                        <div className="flex justify-center">
                            <img 
                                src={userData.image} 
                                alt="" 
                                className="w-70 rounded-full"
                                onClick={() => setShowPhoto(true)}
                            />
                        </div>
                        <div className="my-3 flex flex-col gap-1.5 ">
                            <h1 className="font-semibold text-4xl">{userData.firstName} {userData.lastName}</h1>
                            <h2 className="font-medium text-2xl">@{userData.username}</h2>
                            <PrimaryButton onClick={() => setSearchParams({edit : true})}  size="medium" className="w-full" color="secondry">Edit Profil</PrimaryButton>
                            <p className={clsx(!moreDesc && "line-clamp-4", "text-sm")}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis fugit exercitationem, repellat eos, magnam minima nemo maiores culpa autem sequi officiis, maxime aspernatur voluptatem incidunt. Temporibus accusantium sequi provident ea.</p>
                            <span 
                                className="text-center flex justify-center cursor-pointer text-accent text-sm  items-center select-none"
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
                    </div>
                    <hr  className="opacity-20 my-8 " />
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">  
                            <EnvelopeIcon className="size-5"/>
                            <a href="mailto:amrigacorrr@gmail.com" className="line-clamp-1 text-sm">{userData.email}</a>
                        </div>
                        <div className="flex items-center gap-2">  
                            <LinkIcon className="size-5"/>
                            <a href="https://github.com/S4LPICON" target="blank" className="line-clamp-1 text-sm">https://github.com/S4LPICON</a>
                        </div>
                        <div className="flex items-center gap-2">  
                            <LinkIcon className="size-5"/>
                            <a href="https://github.com/S4LPICON" target="blank" className="line-clamp-1 text-sm">https://github.com/S4LPICON</a>
                        </div>
                        <div className="flex items-center gap-2">  
                            <LinkIcon className="size-5"/>
                            <a href="https://github.com/S4LPICON" target="blank" className="line-clamp-1 text-sm">https://github.com/S4LPICON</a>
                        </div>
                    </div>
                </div>
                <div className="gap-3.5 grid ">
                    {!userPostDataLoading ? 
                        userPostData.map(itm => (
                            <PostCardProfile data={itm}  />
                        ))
                        :
                        [...Array(6)].map(() => (
                            <PostCardProfileSkeleton/>
                        ))
                    }
                
                </div>
            </div>
            <BaseModal show={showPhoto} onClose={() => setShowPhoto(false)}>
                <div className="flex justify-end cursor-pointer ">
                    <XMarkIcon onClick={() => setShowPhoto(false)}  className="size-6 duration-200 hover:bg-gray-300 rounded p-0.5"/>
                </div>
                <div className="grid place-items-center select-none">
                    <img src={profil} alt="" className="w-80"  />
                </div>                    
            </BaseModal>
        </>
    )
}