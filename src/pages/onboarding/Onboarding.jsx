import { useNavigate, Link, Outlet } from "react-router-dom";
import logo from "../../assets/Recipedia.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export default function Onboarding() {
    const navigate = useNavigate()
    return (
         <div className="h-full grid grid-rows-[auto_1fr] ">
           <div className=" h-15 lg:h-20 z-20">
                <div className="w-full fixed   h-15 lg:h-20 z-20 bg-light duration-[1000ms] flex items-center justify-between px-8 ">
                    <Link to={'/'}>
                        <img src={logo} alt="" className=" w-35 sm:w-45" />
                    </Link>
                    <button  onClick={() => navigate(-1)}  className="flex gap-3 border border-gray-400 rounded items-center px-2 py-0.5  cursor-pointer hover:bg-gray-200 ">
                        <ArrowLeftIcon className="size-3 md:size-4 "  strokeWidth={1}/>
                        <span className="text-xs md:text-sm   ">Kembali</span>
                    </button>
                </div>
            </div>
            <div className="w-full max-w-xl mx-auto max-md:px-2.5   ">
                <Outlet/>
            </div>
        </div>
    )
}