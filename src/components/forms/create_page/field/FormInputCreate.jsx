import { TrashIcon } from "@heroicons/react/24/outline"
import FormInput from "../../input/FormInput"
import { useEffect, useState } from "react"

export default function FormInputCreate({ value = '', name, handleInput, handleDelete }) {
    const [placeholder, setPlaceholder] = useState('')
    useEffect(() => {
        if (value.includes('%plchdr%')) {
            setPlaceholder(value.replace('%plchdr%', ''))
        }
    }, [])
    return (
        <div  className="flex gap-2 w-full items-center" >
            <FormInput onChange={handleInput} name={name} placeholder={placeholder} value={value.includes('%plchdr%') ? '' : value } size="sm" />
            <TrashIcon onClick={handleDelete}  className="size-6 hover:text-red-500 duration-200 cursor-pointer"/>
        </div>
    )  
} 