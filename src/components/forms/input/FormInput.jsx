import clsx from "clsx"

export default function FormInput({ size = "md", className, ...props }) {
    const sizes= {
        sm: "h-8 text-sm px-2",
        md: "h-10 text-base px-3",
        lg: "h-13 text-xl md:text-2xl px-4",
    }

    return (
        <input
            type="text"
            className={clsx(
                "bg-[#E6E6E6] text-thirdty w-full rounded-md focus:outline-none focus:ring-2 focus:ring-thirdty/40",
                "transition-all duration-200 ease-in-out placeholder:text-gray-500",
                sizes[size],
                className
            )}
            {...props}
        />
    )
}
