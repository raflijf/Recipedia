import { useRef, useState } from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";

import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import logo from "../../../assets/Recipedia.png";
import googleLogo from "../../../assets/google.png";

import PrimaryButton from "../../../components/button/PrimaryButton";
import FormInput from "../../../components/forms/input/FormInput";

import validate from "../../../helper/validate";

export default function Login() {
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()

    const emailFormRef = useRef(null)
    const [formStatus, setFormStatus] = useState(null)
    const handleEmailForm = (e) => {
        e.preventDefault() 
        const value = e.target.email.value
        console.log(validate.email(value))
        if (!validate.email(value)) return setFormStatus({status : 'error', message : 'Email tidak valid !'})
        setFormStatus({status : 'success', message : 'Kode verifikasi sudah dikirim ke Email anda!'})
        setSearchParams({verify : true})
    }
    console.log(searchParams)

    return (
        <div className="h-full grid grid-rows-{auto_1fr} ">
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
            <div className="w-full max-w-xs mx-auto " >
                <div className=" ">
                    <div>
                        <div className=" mb-7">
                            <h1 className="text-xl font-medium">Masuk ke akun <span className="text-secondry font-semibold">Recipedia</span> anda</h1>
                            <p className="text-thirdty/70">Untuk menejelajahi lebih banyak resep</p>
                        </div>

                        <div>
                            <button className="flex w-full border  border-gray-400  hover:bg-gray-200  duration-200 rounded justify-between items-center gap-4 px-2 py-2  cursor-pointer  " >
                                <img src={googleLogo} alt="google"  className="w-5 h-5" />
                                <span className="text-sm font-medium">Lanjutkan dengan Google</span>
                                <span></span>
                            </button>
                            <hr className="my-6 w-[80%] text-gray-300 mx-auto " />
                            <form  onSubmit={handleEmailForm}  ref={emailFormRef} >
                                <div className="flex flex-col gap-4">
                                    {searchParams.get('verify') === 'true' ? 
                                        <>
                                            <p className="text-sm font-light text-thirdty/80">Periksa Email anda dan masukkan kode yang diberikan</p>
                                            <div className="space-y-1">
                                                <FormInput 
                                                    size="md"  
                                                    placeholder="Masukkan Kode" 
                                                    autocomplete="off"  
                                                    type="number"
                                                    inputMode="numeric"
                                                    className="
                                                        [appearance:textfield]
                                                        [&::-webkit-inner-spin-button]:appearance-none
                                                        [&::-webkit-outer-spin-button]:appearance-none
                                                    " 
                                                />
                                                <button className="text-sm cursor-pointer w-fit ml-1 text-gray-700 hover:text-gray-900">Kirim ulang ? </button>
                                            </div>


                                        </>                                
                                        :
                                        <>
                                            <FormInput
                                                size="md"
                                                placeholder="Email"
                                                name="email"
                                                autocomplete="off"
                                            />
                                            {formStatus?.status === 'error' && 
                                                <p className="text-sm text-red-500">{formStatus?.message}</p>
                                            }
                                            <PrimaryButton type="submit" size="medium" >Lanjutkan</PrimaryButton>
                                        </>
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}