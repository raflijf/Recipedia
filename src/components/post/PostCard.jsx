import Like from '../icon/Like'
import profil from '../../assets/billGates.jpeg'

export default function PostCard({img, difficulty, times, title, ref}) {
    return (
        <div className="w-full max-w-md grid grid-rows-[auto_1fr_auto_auto] gap-2" ref={ref} >  
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <img src={profil} className="w-8 h-8 rounded-full object-cover" alt="" />
                    <p className="font-semibold">Emak seram</p>
                </div>
            </div>
            <div className="w-full  overflow-hidden ">
                <img
                src={img}
                className="w-full   rounded aspect-[10/7] object-cover lg:aspect-[16/12.5] transform hover:scale-105   duration-300"
                alt=""
                />
            </div>
            <div className="grid grid-cols-[auto_auto_1fr] justify-items-end items-center gap-3 h-auto">
                <span className="font-bold text-accent text-lg sm:text-xl">{times} Menit</span>
                <span className="font-bold text-primary text-lg sm:text-xl">{difficulty}</span>
                <Like
                variant={"outline"}
                moreStyle={"cursor-pointer"}
                onClick={() => console.log("sdsds")}
                />
            </div>
            <div>
                <h1 className="font-bold text-text text-lg sm:text-xl md:text-2xl leading-snug line-clamp-1 ">
                {title}
                </h1>
            </div>
        </div>
    )
} 