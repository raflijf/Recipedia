import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/button/PrimaryButton";
import FormInput from "../../components/forms/input/FormInput";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Name() {
    const navigate = useNavigate()

    const handleForm = (e) => {
        e.preventDefault()
        const value = e.target.name.value
        if (!value) return;
        sessionStorage.setItem('name', e.target.name.value)
    }

    return (
        <div className="w-full h-full grid place-items-center ">
            <form onSubmit={handleForm}  className="flex flex-col gap-4"> 
                <label className=" text-2xl lg:text-3xl font-semibold text-center text-primary">Siapa Nama Anda ? </label>
                <div className="  md:w-sm">
                    <FormInput placeholder={'Ketik nama anda disini'} name="name" />
                </div>
                <div className="flex justify-end">
                    <PrimaryButton onClick={() => navigate('/start/intro')}  className={'w-30 flex  items-center gap-2 justify-center'} size="small" type="submit">Lanjut 
                        <ArrowRightIcon className="size-4 stroke-2" n/>
                    </PrimaryButton>
                </div>
            </form>
        </div>
    )
}