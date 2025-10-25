import { useEffect, useRef, useState } from "react";

import clsx from "clsx";
import FormInputCreate from "./FormInputCreate";

import { Bars4Icon, TrashIcon } from "@heroicons/react/24/outline";

export default function FormInputCreateStep({idx,  value, name, handleInput, handleDelete}) {
    const textAreaRef = useRef(null)
    useEffect(() => {
        const textarea = textAreaRef.current
        textarea.style.height = textarea.scrollHeight + 'px'
        const handleInputHeight = () => {
            textarea.style.height = 'auto'
            textarea.style.height = `${textarea.scrollHeight}px`
        }
        textarea.addEventListener('input', handleInputHeight)
        return () => textarea.removeEventListener('input', handleInputHeight)
    })

    const [placeholder, setPlaceholder] = useState('')
    useEffect(() => {
        if (value.includes('%plchdr%')) {
            setPlaceholder(value.replace('%plchdr%', ''))
        }
    }, [])
    return (
        <div className="flex items-start gap-2 " >
            <span className="bg-thirdty w-10 aspect-square flex items-center justify-center text-light rounded-full font-semibold">{idx}</span>
            <textarea 
                name="" 
                id=""
                ref={textAreaRef}
                value={value.includes('%plchdr%') ? '' : value}
                onChange={handleInput}
                placeholder={placeholder}
                name={name}
                className={clsx(
                    "bg-[#E6E6E6] text-thirdty w-full rounded-md focus:outline-none focus:ring-2 focus:ring-thirdty/40",
                    "placeholder:text-gray-500 resize-none overflow-hidden",
                    "text-sm   font-normal ",
                    "py-1.5 px-2 ",
                )}
            ></textarea>
            <TrashIcon onClick={handleDelete} className="size-7 hover:text-red-500 duration-200 cursor-pointer"/>
        </div>
    )
}