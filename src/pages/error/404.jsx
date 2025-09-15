import { useNavigate } from "react-router-dom"

export default function NotFound() {

    const navigate = useNavigate()


    return (
        <div className="h-screen w-screen grid place-items-center">
            <div>
                <h2 className="text-9xl select-none font-bold text-primary text-center ">4<span className="text-secondry">0</span>4</h2>
                <p className="font-semibold"><span className="text-secondry">Maaf</span>, Halaman yang anda tuju tidak ditemukan</p>
                <div className="text-center">
                    <button type="button" onClick={() => navigate(-1)} className="hover:underline underline-offset-2 text-secondry cursor-pointer">Kembali</button>
                </div>
            </div>
        </div>
    )
}