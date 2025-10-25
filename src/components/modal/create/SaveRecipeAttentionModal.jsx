import { XMarkIcon } from "@heroicons/react/24/outline"
import BaseModal from "../BaseModal"
import PrimaryButton from "../../button/PrimaryButton"
import { useState } from "react"

export default function SaveRecipeAttentionModal({show, onClose, handleSaveRecipe}) {
    const [dontRememberMe, setDontRememberMe] = useState(false)
    const handleContinueButton = () => {
        localStorage.setItem('dontRememerMeAttentionSaveRecipe', dontRememberMe)
        handleSaveRecipe()
        onClose(false)
    }
  
    return (
        <BaseModal show={show} onClose={() => onClose(false)}>
            <div>
                <div className="flex justify-end items-center mb-4">
                    <XMarkIcon onClick={() => onClose(false)} className="size-5 hover:bg-thirdty/5 rounded-sm duration-200  cursor-pointer "/>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <p className="text-xs">
                            Resep yang kamu buat tidak disimpan di server atau internet, melainkan hanya tersimpan di perangkat yang kamu gunakan saat ini. Artinya, data resep kamu tidak dapat diakses dari perangkat lain dan tidak tersimpan secara online.<br/><br/>
                            Jika kamu menghapus data penyimpanan di perangkat in, misalnya saat membersihkan riwayat, cache, atau data situs, maka semua resep yang pernah kamu buat akan ikut terhapus dan tidak dapat dikembalikan.<br/><br/>
                            Untuk menjaga agar resep kamu tetap tersimpan, pastikan kamu tidak menghapus data penyimpanan aplikasi atau situs ini, atau simpan salinan resep kamu di tempat lain. 
                        </p>
                        <label htmlFor="check" className="select-none flex items-center gap-1.5 w-fit">
                            <input onChange={(e) => setDontRememberMe(e.target.checked)} type="checkbox" name="check" id="check" />
                            <span className="text-xs ">jangan ingatkan saya lagi</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-end gap-2 ">
                        <button onClick={() => onClose(false)}  className="py-1 px-3 text-xs sm:py-1.5 sm:px-3.5 sm:text-sm duration-200 rounded cursor-pointer font-medium  bg-thirdty/10 hover:bg-thirdty/20  ">Tutup</button>
                        <PrimaryButton onClick={handleContinueButton} size="small">Lanjutkan</PrimaryButton>
                    </div>
                </div>
            </div>
        </BaseModal>        
    )
}