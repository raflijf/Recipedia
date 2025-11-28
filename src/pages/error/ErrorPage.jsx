import { Link, useNavigate } from "react-router-dom"

import PrimaryButton from "../../components/button/PrimaryButton"

export default function NotFound({statusCode}) {
    const navigate = useNavigate()
    return (
        <div className="h-full grid place-items-center">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl ">Oops, sepertinya ada yang salah</h2>
                <p className="text-center">Status : <span className=" text-lg" >{statusCode}</span>  </p>
                <div className=" text-center">
                    <Link to={'/'}>
                        <PrimaryButton onClick={() => navigate('/')}>
                            Kembali ke beranda
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    )
} 