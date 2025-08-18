import { Link } from 'react-router-dom'
import profil from '../../assets/billGates.jpeg'
import piscok from '../../assets/piscok.png'

import Like from '../../components/icon/Like'

export default function PostCard() {
    return (
        <div className="w-full max-w-md grid grid-rows-[auto_1fr_auto_auto] gap-2">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={profil} className="w-8 h-8 rounded-full object-cover" alt="" />
                    <p className="font-semibold">Emak seram</p>
                </div>
                <span className="text-sm text-text/60">20-07-2025</span>
            </div>
            <div className="w-full ">
                <img
                src={piscok}
                className="w-full h-48 sm:h-60 rounded object-cover"
                alt=""
                />
            </div>
            <div className="grid grid-cols-[auto_auto_1fr] justify-items-end items-center gap-3 h-auto">
                <span className="font-bold text-accent text-lg sm:text-xl">10 Menit</span>
                <span className="font-bold text-primary text-lg sm:text-xl">Mudah</span>
                <Like
                variant={"outline"}
                moreStyle={"cursor-pointer"}
                onClick={() => console.log("sdsds")}
                />
            </div>
            <div>
                <h1 className="font-bold text-text text-lg sm:text-xl md:text-2xl leading-snug">
                Resep membuat piscok ala papua selatan
                </h1>
            </div>
        </div>
    )
} 