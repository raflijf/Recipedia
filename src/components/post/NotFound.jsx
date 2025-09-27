import { Link } from "react-router-dom"

import PrimaryButton from "../button/PrimaryButton"

export default function NotFound() {
    return (
        <div className="h-full grid place-items-center">
            <div className="flex flex-col gap-2">
                <h2 className="text-xl ">Oops, sepertinya ada yang salah</h2>
                <div className=" text-center">
                    <Link to={'/'}>
                        <PrimaryButton>
                            Kembali ke beranda
                        </PrimaryButton>
                    </Link>
                </div>
            </div>
        </div>
    )
} 