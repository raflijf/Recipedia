import piscok from "../../assets/piscok.png"
import Like from "../icon/Like"
import profil from "../../assets/billGates.jpeg"

export default function SecondaryPostCard() {
    return (
        <div className="max-w-md w-full">
            <div className="rounded-lg w-full overflow-hidden group relative ">
                <img 
                    src={piscok} 
                    alt="piscook" 
                    className="group-hover:scale-106 transform duration-300  cursor-pointer brightness-70 "
                />
                <div className="absolute top-2 left-2  flex items-center gap-2.5">
                    <img src={profil} alt="" className="rounded-full w-10 "/>
                    <h2 className="font-semibold text-white text-lg">Emak seram</h2>
                </div>
            </div>
            <div className="grid grid-cols-[1fr_auto] items-center">
                <h2 className="font-bold text-text text-lg sm:text-xl md:text-2xl leading-snug ">Resep piscok ala papua selatan</h2>
                <Like variant={'outline'} size="md"/>
            </div>
        </div>
    )
}