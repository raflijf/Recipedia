import { LinkIcon } from "@heroicons/react/24/outline"
import clsx from "clsx"

export default function FormUrl({className, size='sm'  ,...props}) {
    const sizes= {
        sm: "h-8 text-sm px-2",
        md: "h-10 text-base px-3",
        lg: "h-13 text-xl md:text-2xl px-4",
    }
    return (
        <label 
            for="url" 
            className={clsx(
                "bg-[#E6E6E6] text-thirdty w-full  flex items-center gap-3  px-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-thirdty/40",
                "transition-all duration-200 ease-in-out placeholder:text-gray-500",
                sizes[size],
                className
        )}>
            <LinkIcon className="size-4"/>
            <input type="text" {...props} className="focus:outline-none w-full"/>
        </label>
    )
}