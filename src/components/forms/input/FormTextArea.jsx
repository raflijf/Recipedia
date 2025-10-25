import clsx from "clsx"

export default function FormTextArea({ className, ...props }) {
    return (
        <textarea
        className={clsx(
            "bg-[#E6E6E6] text-thirdty w-full rounded-md focus:outline-none focus:ring-2 focus:ring-thirdty/40",
            "placeholder:text-gray-500 resize-none",
            "text-sm md:text-base l font-normal h-full",
            "p-2 md:p-3 lg:p-4 transition-all duration-200 ease-in-out",
            className
        )}
        {...props}
        ></textarea>
    )
}
