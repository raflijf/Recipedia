import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import { XMarkIcon, CameraIcon } from "@heroicons/react/24/outline";

import useWindowSize from "../../../hook/useWindowSize";

import FormInput from "../../forms/input/FormInput";
import FormTextArea from "../../forms/input/FormTextArea";
import FormUrl from "../../forms/input/FormInputUrl";

import PrimaryButton from "../../button/PrimaryButton";
import BaseModal from "../BaseModal";

import billgates from "../../../assets/billgates.jpeg";

export default function EditProfileModal() {
    const [searchParams, setSearchParams] = useSearchParams()
    const {width} = useWindowSize()

    const [profileData, setProfileData ] = useState({
        username : '',
        displayName : '',
        email : '',
        description : '',
        photo : null,
        links : [],
    })  
    const handleInputs =  {
        username : (e) => setProfileData(prev => ({...prev, username : e.target.value})),
        displayName : (e) => setProfileData(prev => ({...prev, displayName : e.target.value})),
        email : (e) => setProfileData(prev => ({...prev, email : e.target.value})),
        description : (e) => setProfileData(prev => ({...prev, description : e.target.value})),
        photo : (e) => setProfileData(prev => {
            const file = e.target.files[0]
            if (!file) return prev
            return {...prev, photo : URL.createObjectURL(file)}
        }) 
    }
    const [linkDatas, setLinkDatas] = useState(Array(6).fill(''))
    const handleInputUrl = (e, idx) => {
        const value = e.target.value
        setLinkDatas(links => {
            const newLinks = [...links]
            newLinks[idx] = value
            setProfileData(prev => ({...prev, links : newLinks.filter(itm => itm.trim() !== '') }))
            return newLinks
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
    }
    
    return (
        <BaseModal 
            show={searchParams.get('edit')} 
            onClose={() => setSearchParams({})}
            width={'threexl'} 
            fullScreen={width <= 768}
        >
                <div className="flex justify-end cursor-pointer ">
                    <XMarkIcon onClick={() => setSearchParams({}) }   className="size-6 duration-200 hover:bg-gray-300 rounded p-0.5"/>
                </div>
                <form onSubmit={handleSave} className="flex flex-col gap-5">
                    <div className="flex justify-center">
                        <label htmlFor="photo" className="relative w-fit">
                            <img src={profileData.photo ? profileData.photo : billgates} alt=""  className="rounded-full w-20 h-20 object-cover" />
                            <CameraIcon className="size-6 bg-gray-300 rounded-full w-6 h-6 p-1 absolute bottom-0 right-0 " />
                        </label>
                        <input onChange={handleInputs.photo}   type="file" accept="image/jpeg,image/jpg,image/png,image/webp"   id="photo" className="hidden" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-3">
                        <div className="grid grid-rows-2 gap-3">
                            <div className="flex flex-col gap-3">
                                <FormInput onChange={handleInputs.username} value={profileData.username}  placeholder="Username" size="sm" name="username" id="username"  />
                                <FormInput onChange={handleInputs.displayName} value={profileData.displayName}   placeholder="Nama Tampilan" size="sm" name="displayNname"  id="displayNname"  />
                                <FormInput onChange={handleInputs.email} value={profileData.email}   placeholder="Email" size="sm"  name="email" id="email"  />
                            </div>
                            <FormTextArea  onChange={handleInputs.description} value={profileData.description}  placeholder="Deskripsi" name="description" id="description"  />
                        </div>
                        <div className="space-y-3">
                            {linkDatas.map((value, idx) => (
                                <FormUrl 
                                    placeholder={`Link ${idx + 1}`} 
                                    value={value}
                                    onChange={e => handleInputUrl(e, idx)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-sm cursor-pointer text-blue-500">Ubah password</span>
                        <PrimaryButton type="submit" name="save"  size="small">Simpan</PrimaryButton>
                    </div>
                </form>
        </BaseModal>
    )
}