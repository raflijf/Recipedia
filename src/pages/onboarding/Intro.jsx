import { useState } from "react"
import PrimaryButton from "../../components/button/PrimaryButton"
import { useNavigate } from "react-router-dom"

export default function Intro() {
    const navigate = useNavigate()


    const name = sessionStorage.getItem('name')
    const [isAgree, setIsAgree] = useState(false)

    const handleContinue = () => {
        if (!isAgree) return; 
        navigate('/')
    }

    return (
        <div className="space-y-3 mb-20">  
            <h2 className="text-thirdty text-4xl font-medium">Hallo <span className="text-primary font-bold">{name}</span>, Selamat datang di <span className="font-semibold text-secondry">Recipedia</span>  </h2>
            <p className=" font-normal">Sebelum melanjutkan, silahkan dibaca terlebih dahulu hal-hal yang disampaikan dibawah ini</p>
            <div>
                <hr className="w-[80%] mx-auto my-4 opacity-20 " />
                <div className="space-y-0.5">
                    <h3 className="font-medium text-ax text-lg">Tentang Recipedia</h3>
                    <p className="text-sm">Recipedia adalah aplikasi web yang membantu pengguna menemukan berbagai resep makanan dengan mudah, cepat, dan praktis.
                    <br />Project ini dibuat sebagai personal project untuk melatih skill frontend dan backend, sekaligus simulasi aplikasi nyata.</p>
                </div>
                <hr className="w-[80%] mx-auto my-4 opacity-20 " />
                <div className="space-y-0.5">
                    <h3 className="font-medium text-ax text-lg">Tujuan</h3>
                    <ul className="text-sm list-disc list-inside">
                        <li>Melatih pembuatan aplikasi web end-to-end</li>
                        <li>Menerapkan pengelolaan data resep (create, read, update, delete)</li>
                        <li>Melatih UX sederhana tapi usable</li>
                        <li>Eksperimen dengan state management, API, dan UI component</li>
                    </ul>
                </div>
                <hr className="w-[80%] mx-auto my-4 opacity-20 " />
                <div className="space-y-0.5">
                    <h3 className="font-medium text-ax text-lg">Fitur</h3>
                    <ul className="text-sm list-disc list-inside">
                        <li>Pencarian resep berdasarkan nama</li>
                        <li>Detail resep (bahan dan langkah memasak)</li>
                        <li>Menyimpan resep favorit</li>
                        <li>Tampilan responsif</li>
                    </ul>
                </div>
                <hr className="w-[80%] mx-auto my-4 opacity-20 " />
                <div className="space-y-0.5">
                    <h3 className="font-medium text-ax text-lg">Teknologi</h3>
                    <ul className="text-sm list-disc list-inside">
                        <li>React & Tailwind CSS (Frontend)</li>
                        <li>Django / Django REST Framework (Backend)</li>
                        <li>API & state management</li>
                    </ul>
                </div>
                <hr className="w-[80%] mx-auto my-4 opacity-20 " />
                <div className="space-y-0.5">
                    <h3 className="font-medium text-ax text-lg">Catatan</h3>
                    <p className="text-sm">Recipedia bukan aplikasi komersial.<br/> Semua data yang digunakan bersifat dummy / public API dan hanya untuk keperluan pembelajaran.</p>
                </div>
            </div>
            <label className="select-none text-sm flex items-center gap-3">
                <input type="checkbox" onChange={e => setIsAgree(e.target.checked)} />
                <span>Saya sudah baca dan menyetujui hal-hal yang telah disampaikan </span>
            </label>
            <div className="flex justify-end">
                <PrimaryButton onClick={handleContinue}>Lanjutkan dan mulai</PrimaryButton>
            </div>
        </div>
    )
}